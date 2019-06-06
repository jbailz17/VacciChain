import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';
import {ContractService} from '../../shared/Services/contract.service';

@Component({
  selector: 'app-batch-add',
  templateUrl: './batch-add.component.html',
  styleUrls: ['./batch-add.component.css']
})
export class BatchAddComponent implements OnInit {

  fridges: number[] = [];

  constructor(private _contractService: ContractService,
    private _flashMessageService: FlashMessagesService) { }

  async ngOnInit() {
    this._contractService.displayContract();
    this.fridges = await this.retrieveFridges();
  }

  retrieveFridges() {
    return this._contractService.retrieveAllFridges().then(res => {
      var result: number[];
      result = res.map(el => {
        return el[0];
      });
      return result; 
    });
  }

  async onAddBatch(form: NgForm) {
    console.log("FORM RESULT: ", form.value);
    let result = form.value;

    if (result.initialTemp < 2 || result.initialTemp > 8) {
      console.log("Invalid initial temperature.");
      this._flashMessageService.show("Invalid temperature was entered.", {cssClass: "alert-danger", timeout: 3000});
      return;
    }

    if (await this.validateBatchID(result.batchID)) {
      console.log("Batch already exists.");
      this._flashMessageService.show("Batch already exists.", {cssClass: "alert-danger", timeout: 3000});
      return;  
    }

    let expiry = new Date(result.expiry).getTime();
    this._contractService.addBatch(result.batchID, result.batchInfo,
                                   result.initialTemp,result.vacType,
                                   expiry,result.fridgeID);
  }

  async validateBatchID(id: number) {
    let result: boolean;
    await this._contractService.batchExists(id).then(res => {
      result = res;
    });
    return result;
  }

}
