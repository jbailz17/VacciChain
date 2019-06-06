import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';
import { ContractService } from '../../shared/Services/contract.service';


@Component({
  selector: 'app-vial-add',
  templateUrl: './vial-add.component.html',
  styleUrls: ['./vial-add.component.css']
})
export class VialAddComponent implements OnInit {

  batches: number[] = [];
  fID: number;

  constructor(private _contractService: ContractService,
    private _flashMessageService: FlashMessagesService) { }

  async ngOnInit() {
    this.batches = await this.retrieveBatches();
  }

  retrieveBatches() {
    return this._contractService.retrieveAllBatches().then(res => {
      var result: number[];
      result = res.map(el => {
        return el[0];
      });
      return result;
    });
  }

  async setFridgeID(form: NgForm) {
    let batchID = form.value.batchID;

    this.fID = await this._contractService.retrieveBatchFridge(batchID).then(res => {
      return res[0];
    });
  }

  async onAddVial(form: NgForm) {
    let newVials = form.value;

    console.log("New Vials: ", newVials);
    console.log("Submitted FridgeID: ", newVials.fridgeID);

    if (newVials.startID > newVials.endID) {
      console.log("Start and End IDs are not valid.");
      this._flashMessageService.show("Start and End Vial IDs are not valid.", {cssClass: 'alert-danger', timeout: 3000})
      return;
    }

    let invalidVials = await this._contractService.checkVials(newVials.batchID, 
      newVials.startID, newVials.endID);

    if (invalidVials) {
      console.log("Vial IDs have already been used.");
      this._flashMessageService.show("Vial IDs have already been used.", {cssClass: 'alert-danger', timeout: 3000})
      return;
    }

    await this._contractService.addVials(newVials.batchID, 
      newVials.fridgeID, newVials.startID, newVials.endID);
  }

}
