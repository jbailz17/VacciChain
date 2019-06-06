import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { FlashMessagesService } from 'angular2-flash-messages';
import { ContractService } from '../../../shared/Services/contract.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-vial-list',
  templateUrl: './vial-list.component.html',
  styleUrls: ['./vial-list.component.css']
})
export class VialListComponent implements OnInit, OnDestroy {

  @ViewChild('searchVial') searchForm: NgForm
  batchID: number;
  batches: number[] = [];
  originalVials: number[] = [];
  currentVials: number[] = [];
  batchSelected: boolean = false;
  vialSubscription: Subscription;

  constructor(private _contractService: ContractService,
    private _flashMessageService: FlashMessagesService) { }

  async ngOnInit() {
    this.batches = await this.retrieveBatches();

    const vialObserver = Observable.create((observer: Observer<any>) => {
      setInterval(() => {
        this._contractService.watchVial().then(res => {
          observer.next(res);
        });
      }, 2000);
    });

    this.vialSubscription = vialObserver.subscribe(async (res) => {
      if (this.batchID != null) {
        await this.retrieveVials(this.batchID);
        if (this.batchSelected == true) {
          if (this.originalVials.length > 0 && this.searchForm.controls['vialID'].value == '') {
            this.currentVials = this.originalVials;
          }
        } else {
          if (this.originalVials.length > 0) {
            this.currentVials = this.originalVials;
            this.batchSelected = true;
          }
        }
      }
    }, err => {
      console.log("An error occurred: ", err);
    });
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

  async retrieveVials(batchID: number) {
    await this._contractService.retrieveVials(batchID).then(res => {
      if (res.length == 0) {
        console.log("This batch contains no vials.");
        this.originalVials = [];
        return;
      }

      this.originalVials = res.map(el => {
        return el[0];
      });

      console.log("Vials: ", this.originalVials);
    });
  }

  async findVial(batchForm: NgForm) {
    this.batchID = batchForm.value.batchID;

    if (this.batchID == null) {
      return;
    }

    await this.retrieveVials(this.batchID);

    if (this.originalVials.length < 1) {
      this.batchSelected = false;
      this._flashMessageService.show("This batch currently has no vials.", {cssClass: 'alert-danger', timeout: 3000});
      return;
    }

    this.currentVials = this.originalVials;

    this.batchSelected = true;
  }

  onSearch(form: NgForm) {
    let searchID = form.value.vialID;
    if (parseInt(searchID)) {
      this.currentVials = this.originalVials.filter(el => {
        return String(el).indexOf(searchID) > -1;
      });
    } else {
      if (searchID == '') {
        this.currentVials = this.originalVials;
      } else {
        console.log('Not a number');
      }
    }
  }

  ngOnDestroy() {
    this.vialSubscription.unsubscribe();
  }
  

}
