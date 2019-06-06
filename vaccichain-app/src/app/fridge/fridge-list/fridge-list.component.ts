import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

import { ContractService } from '../../shared/Services/contract.service';

@Component({
  selector: 'app-fridge-list',
  templateUrl: './fridge-list.component.html',
  styleUrls: ['./fridge-list.component.css']
})
export class FridgeListComponent implements OnInit, OnDestroy {

  @ViewChild('searchFridge') searchForm: NgForm;
  originalFridges: number[] = [];
  currentFridges: number[] = [];
  fridgeSubscription: Subscription;

  constructor(private _contractService: ContractService) { }

  async ngOnInit() {
    this.currentFridges = this.originalFridges = await this._contractService.retrieveAllFridges();

    const newFridge = Observable.create((observer: Observer<any>) => {
      setInterval(() => {
        this._contractService.watchFridge().then(res => {
          observer.next(res);
        });
      }, 1000);
    });

    this.fridgeSubscription = newFridge.subscribe(async (res) => {
      this.originalFridges = await this._contractService.retrieveAllFridges();
      if (this.searchForm.controls['fridgeID'].value == '') {
        this.currentFridges = this.originalFridges;
      }
    }, err => {
      console.log("An error occurred: ", err);
    });
  }

  onSearch(form: NgForm) {
    let searchID = form.value.fridgeID;
    if (parseInt(searchID)) {
      this.currentFridges = this.originalFridges.filter(el => {
        return String(el).indexOf(searchID) > -1;
      });
    } else {
      if (searchID == '') {
        this.currentFridges = this.originalFridges;
      } else {
        console.log('Not a number');
      }
    }
  }

  ngOnDestroy() {
    this.fridgeSubscription.unsubscribe();
  }

}
