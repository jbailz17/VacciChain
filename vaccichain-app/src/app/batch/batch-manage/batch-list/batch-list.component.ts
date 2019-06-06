import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ContractService } from '../../../shared/Services/contract.service'

import { Batch } from '../../batch.model';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit, OnDestroy {

  @ViewChild('searchBatch') searchForm: NgForm;
  originalBatches: number[];
  currentBatches: number[];
  batchSubscription: Subscription;
  searchEntered: boolean = false;

  constructor(private _contractService: ContractService) { }

  async ngOnInit() {
    this.originalBatches = await this.retrieveBatches();

    this.currentBatches = this.originalBatches;
    
    const newBatch = new Observable(observer => {
      setInterval(() => {
        this._contractService.watchBatch().then(res => {
          observer.next(res);
        });
      }, 1000);
    });

    this.batchSubscription = newBatch.subscribe(async (res) => {
      this.originalBatches = await this.retrieveBatches();
      if (this.searchForm.controls['batchID'].value == '') {
        this.currentBatches = this.originalBatches;
      }
    }, err => {
      console.log('A subscription error occurred: ', err);
    });

  }

  async retrieveBatches() {
    return await this._contractService.retrieveAllBatches().then(res => {
      var result: number[];
      result = res.map(el => {
        return el[0];
      });
      return result;
    });
  }

  onSearch(form: NgForm) {
    let searchID = form.value.batchID;
    if (parseInt(searchID)) {
      console.log(parseInt(searchID))
      this.currentBatches = this.originalBatches.filter(el => {
        return String(el).indexOf(searchID) > -1;
      });
    } else {
      if (searchID == '') {
        this.currentBatches = this.originalBatches;
      } else {
        console.log('Not a number');
      }
    }
  }

  ngOnDestroy() {
    this.batchSubscription.unsubscribe();
  }

}
