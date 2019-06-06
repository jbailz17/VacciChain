import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { NgForm } from '@angular/forms';

import { ContractService } from '../../../shared/Services/contract.service';
import { Batch } from '../../batch.model';

@Component({
  selector: 'app-batch-detail',
  templateUrl: './batch-detail.component.html',
  styleUrls: ['./batch-detail.component.css']
})
export class BatchDetailComponent implements OnInit {
  @ViewChild('batchForm') batchForm: NgForm;
  id: number;
  fridgeID: number;
  fault: boolean = false;
  expired: boolean = false;
  batch: Batch;

  constructor(private _route: ActivatedRoute,
      private _contractService: ContractService) {}

  async ngOnInit() {
    await this._route.params.subscribe(async (param: Params) => {
      this.id = +param['id'];
      this.batch = await this.retrieveBatch(this.id);
      this.fridgeID = this.batch.fridgeID;
      this.configureForm();
    });
  }

  private async retrieveBatch(id: number) {
    return await this._contractService.retrieveBatch(this.id).then(res => {
      console.log("Result: ", res);
      return new Batch(res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[8], res[9]);
    });
  }

  private configureForm() {
    console.log('Form Batch: ', this.batch);
    this.batchForm.setValue({
      batchID: this.batch.batchID,
      fridgeID: this.batch.fridgeID,
      vacType: this.batch.vacType,
      initialTemp: this.batch.temp,
      expiry: this.formatDate(new Date(this.batch.expireDate * 1)),
      batchInfo: this.batch.info
    });
    this.fault = this.batch.fault;
    this.expired = this.checkExpired(this.batch.expireDate);
  }

  private formatDate(date) {   
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  private checkExpired(expiredDate) {
    let currentDate = new Date();
    if (expiredDate >= currentDate) {
      return false;
    } else {
      return true;
    }
  }

}
