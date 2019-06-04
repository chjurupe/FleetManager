import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { OrderComponent } from './order/order.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Vehicles', 
    //component: VehicleComponent 
    loadChildren: './vehicle/vehicle.module#VehicleModule'
  },
  { path: 'Orders', component: OrderComponent },
  { path: 'Tasks', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
