import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { BatchComponent } from './batch.component';
import { BatchAddComponent } from './batch-add/batch-add.component';
import { BatchManageComponent } from './batch-manage/batch-manage.component';
import { BatchListComponent } from './batch-manage/batch-list/batch-list.component';
import { BatchListItemComponent } from './batch-manage/batch-list/batch-list-item/batch-list-item.component'
import { BatchDetailComponent } from './batch-manage/batch-detail/batch-detail.component';
import { BatchManageInitialComponent } from './batch-manage/batch-manage-intial/batch-manage-initial.component';
import { BatchChartComponent } from './batch-manage/batch-detail/batch-chart/batch-chart.component';

import { ContractService } from '../shared/Services/contract.service';


@NgModule({
  declarations: [
    BatchComponent,
    BatchAddComponent,
    BatchManageComponent,
    BatchListComponent,
    BatchListItemComponent,
    BatchDetailComponent,
    BatchManageInitialComponent,
    BatchChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ContractService],
 
})
export class BatchModule { }