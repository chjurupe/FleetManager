import { Component, OnInit } from '@angular/core';
import { FleetmanagerService } from '../services/fleetmanager.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemList: any;

  constructor(private fleetmanagerService: FleetmanagerService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    //console.log("HOME");
    this.getData();

  }

  getData(){
    //`top-headlines?country=${countryVariable.tolowerCase()}`
    this.fleetmanagerService.getData('top-headlines?country=us').subscribe(data =>{
      this.itemList = data;
      //console.log("itemList");
      //console.log(this.itemList);

    
    });

  }

  onAdd(item){
    let items = [];
    const val = localStorage.getItem('items');
    if(val !== null){
      items = JSON.parse(val);
    }

    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));

    this.snackBar.open('Item Added', 'OK', {duration: 3000});

  }

}
