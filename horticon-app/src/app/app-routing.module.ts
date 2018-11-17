import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PlantingComponent } from './planting/planting.component';
import { CycleComponent } from './cycle/cycle.component';
import { WaterControlComponent } from './water-control/water-control.component';
import { WashingPipeComponent } from './washing-pipe/washing-pipe.component';
import { PesticideListComponent } from "./pesticide/pesticide-list/pesticide-list.component";
import { PesticideAddComponent } from './pesticide/pesticide-add/pesticide-add.component';
import { PesticideEditComponent } from './pesticide/pesticide-edit/pesticide-edit.component';

const routes: Routes = [
 
  { path: 'planting', component: PlantingComponent },
  { path: 'cycle', component: CycleComponent },
  { path: 'pesticide/:id', component: PesticideEditComponent },
  { path: 'pesticide', component: PesticideAddComponent },
  { path: 'pesticide-list', component: PesticideListComponent },
  { path: 'water-control', component: WaterControlComponent },
  { path: 'washing-pipe', component: WashingPipeComponent }
  //{ path: '', redirectTo: '/about', pathMatch: 'full' },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }


