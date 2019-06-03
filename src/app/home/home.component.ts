import { Component, OnInit } from '@angular/core';
import { FleetmanagerService } from '../services/fleetmanager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemList: any;

  constructor(private fleetmanagerService: FleetmanagerService) { }

  ngOnInit() {

    this.getData();

  }

  getData(){
    this.fleetmanagerService.getData('top-headlines?country=us').subscribe(data =>{
      this.itemList = data;
    });

  }

}
