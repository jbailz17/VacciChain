import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';
import { ContractService } from '../../shared/Services/contract.service';

@Component({
  selector: 'app-fridge-add',
  templateUrl: './fridge-add.component.html',
  styleUrls: ['./fridge-add.component.css']
})
export class FridgeAddComponent implements OnInit {

  constructor(private _contractService: ContractService,
    private _flashMessageService: FlashMessagesService) { }

  ngOnInit() {
  }

  async addFridge(form: NgForm) {

    if (form.value.temp < 2 || form.value.temp > 8) {
      console.log("Invalid temperature was entered.");
      this._flashMessageService.show("Invalid temperature was entered.", {cssClass: 'alert-danger', timeout: 3000});
      return;
    }

    let fridgeExist = await this._contractService.checkFridge(form.value.fridgeID).then(res => {
      return res;
    });

    if (fridgeExist) {
      console.log("Fridge already exist.");
      this._flashMessageService.show("Fridge Already Exist.", {cssClass: 'alert-danger', timeout: 3000});
      return;
    }

    this._contractService.addFridge(form.value.fridgeID, form.value.temp);
  }

}
