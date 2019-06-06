import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { VialModule } from './vial/vial.module';
import { BatchModule } from './batch/batch.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FridgeComponent } from './fridge/fridge.component';
import { FridgeAddComponent } from './fridge/fridge-add/fridge-add.component';
import { FridgeListComponent } from './fridge/fridge-list/fridge-list.component';
import { FridgeDetailComponent } from './fridge/fridge-detail/fridge-detail.component';
import { FridgeListItemComponent } from './fridge/fridge-list/fridge-list-item/fridge-list-item.component';

import { ContractService } from './shared/Services/contract.service';
import { TempChartComponent } from './fridge/fridge-detail/temp-chart/temp-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FridgeComponent,
    FridgeAddComponent,
    FridgeListComponent,
    FridgeDetailComponent,
    FridgeListItemComponent,
    TempChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VialModule,
    BatchModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
