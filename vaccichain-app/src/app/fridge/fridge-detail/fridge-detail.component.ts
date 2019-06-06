import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { NgForm } from '@angular/forms';

import { ContractService } from '../../shared/Services/contract.service';

@Component({
  selector: 'app-fridge-detail',
  templateUrl: './fridge-detail.component.html',
  styleUrls: ['./fridge-detail.component.css']
})
export class FridgeDetailComponent implements OnInit {

  @ViewChild('fridgeForm') fridgeForm: NgForm;
  id: number;
  currentTemp: number;

  constructor(private _contractService: ContractService,
    private _route: ActivatedRoute) { }

  async ngOnInit() {
    this._route.params.subscribe(async (param: Params) => {
      this.id = +param['id'];
      await this.retrieveCurrentTemp();
      await this._contractService.retrieveTempHistory(this.id);
      this.configureView();
    });
  }

  async retrieveCurrentTemp() {
    await this._contractService.retrieveCurrentFridgeTemp(this.id).then(res => {
      this.currentTemp = res;
    });
  }

  configureView() {
    this.fridgeForm.setValue({
      fridgeID: this.id,
      temp: this.currentTemp
    });
  }

}
