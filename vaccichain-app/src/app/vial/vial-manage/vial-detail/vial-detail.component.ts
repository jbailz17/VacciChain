import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { NgForm } from '@angular/forms';

import { ContractService } from '../../../shared/Services/contract.service';
import { Vial } from '../../vial.model';

@Component({
  selector: 'app-vial-detail',
  templateUrl: './vial-detail.component.html',
  styleUrls: ['./vial-detail.component.css']
})
export class VialDetailComponent implements OnInit {

  @ViewChild('vialForm') vialForm: NgForm;
  vialID: number;
  batchID: number;
  vial: Vial;

  used: boolean;
  fault: boolean;

  constructor(private _contractService: ContractService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(async (param:Params) => {
      this.batchID = +param['bID']
      this.vialID = +param['vID'];
      this.vial = await this._contractService.findVial(this.batchID, this.vialID).then(res => {
        return new Vial(res[2], res[3], res[4], res[0], res[1]);
      });
      this.configureForm(this.vial);
    });
  }

  private configureForm(vial) {
    this.vialForm.setValue({
      batchID: vial.batchID,
      fridgeID: vial.fridgeID,
      vialID: vial.vialID,
    });

    this.used = vial.used;
    this.fault = vial.fault;
  }

}
