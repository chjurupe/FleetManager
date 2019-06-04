import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: VehicleComponent
  }
]

@NgModule({
  declarations: [VehicleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class VehicleModule { }
