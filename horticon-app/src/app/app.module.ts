import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatNativeDateModule
} from '@angular/material';

import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { PlantingComponent } from './planting/planting.component';
import { CycleComponent } from './cycle/cycle.component';
import { PesticideComponent } from './pesticide/pesticide.component';
import { WaterControlComponent } from './water-control/water-control.component';
import { WashingPipeComponent } from './washing-pipe/washing-pipe.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PlantingComponent,
    CycleComponent,
    PesticideComponent,
    WaterControlComponent,
    WashingPipeComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [[{provide: LOCALE_ID, useValue: 'pt-BR'}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
