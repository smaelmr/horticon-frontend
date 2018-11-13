import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PlantingComponent } from './planting/planting.component';
import { CycleComponent } from './cycle/cycle.component';
import { PesticideComponent } from './pesticide/pesticide.component';
import { WaterControlComponent } from './water-control/water-control.component';
import { WashingPipeComponent } from './washing-pipe/washing-pipe.component';
import { PesticideListComponent } from "./pesticide/pesticide-list/pesticide-list.component";

const routes: Routes = [
 
  { path: 'planting', component: PlantingComponent },
  { path: 'cycle', component: CycleComponent },
  { path: 'pesticide/:id', component: PesticideComponent },
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


