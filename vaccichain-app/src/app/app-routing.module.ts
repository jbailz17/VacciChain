import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BatchComponent } from './batch/batch.component';
import { BatchAddComponent } from './batch/batch-add/batch-add.component';
import { BatchManageComponent } from './batch/batch-manage/batch-manage.component';
import { VialComponent } from './vial/vial.component';
import { VialAddComponent } from './vial/vial-add/vial-add.component';
import { VialManageComponent } from './vial/vial-manage/vial-manage.component';
import { BatchDetailComponent } from './batch/batch-manage/batch-detail/batch-detail.component';
import { BatchManageInitialComponent } from './batch/batch-manage/batch-manage-intial/batch-manage-initial.component';
import { VialDetailComponent } from './vial/vial-manage/vial-detail/vial-detail.component';
import { VialManageInitialComponent } from './vial/vial-manage/vial-manage-initial/vial-manage-initial.component';
import { FridgeComponent } from './fridge/fridge.component';
import { FridgeAddComponent } from './fridge/fridge-add/fridge-add.component';
import { FridgeDetailComponent } from './fridge/fridge-detail/fridge-detail.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'batch', component: BatchComponent, children: [
        {path: 'add', component: BatchAddComponent},
        {path: 'manage', component: BatchManageComponent, children: [
            {path: ':id', component: BatchDetailComponent},
            {path: '', component: BatchManageInitialComponent}
        ]}
    ]},
    {path: 'vial', component: VialComponent, children: [
        {path: 'add', component: VialAddComponent},
        {path: 'manage', component: VialManageComponent, children: [
            {path: ':bID/:vID', component: VialDetailComponent},
            {path: '', component: VialManageInitialComponent}
        ]}
    ]},
    {path: 'fridge', component: FridgeComponent, children: [
        {path: 'add', component: FridgeAddComponent},
        {path: ':id', component: FridgeDetailComponent}
    ]}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}