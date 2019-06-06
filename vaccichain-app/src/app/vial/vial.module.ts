import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { VialComponent } from './vial.component';
import { VialAddComponent } from './vial-add/vial-add.component';
import { VialManageComponent } from './vial-manage/vial-manage.component';
import { VialListComponent } from './vial-manage/vial-list/vial-list.component';
import { VialListItemComponent } from './vial-manage/vial-list/vial-list-item/vial-list-item.component';
import { VialDetailComponent } from './vial-manage/vial-detail/vial-detail.component';
import { VialManageInitialComponent } from './vial-manage/vial-manage-initial/vial-manage-initial.component';


@NgModule({
  declarations: [
      VialComponent,
      VialAddComponent,
      VialManageComponent,
      VialListComponent,
      VialListItemComponent,
      VialDetailComponent,
      VialManageInitialComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
 
})
export class VialModule { }