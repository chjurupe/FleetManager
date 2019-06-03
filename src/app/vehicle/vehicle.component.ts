import { Component, OnInit, OnDestroy } from '@angular/core';
import { FleetmanagerService } from '../services/fleetmanager.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit, OnDestroy {
  itemList: any;
  itemSubscription;

  constructor(private fleetmanagerService: FleetmanagerService) { }

  ngOnInit() {
    console.log('Vehicle');
    this.getData();
  }

  getData(){
    console.log('Vehicle Get Data');
    this.itemSubscription = this.fleetmanagerService.getData('top-headlines?country=us').subscribe(data =>{
      this.itemList = data;
    });

  }

  ngOnDestroy(){
    this.itemSubscription.unsubscribe;
  }

}
