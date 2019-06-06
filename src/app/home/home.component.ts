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
  pageSize: 8;
  page: 1;
  length;

  constructor(private fleetmanagerService: FleetmanagerService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    //`top-headlines?country=${countryVariable.tolowerCase()}`
    /*this.fleetmanagerService.getData('top-headlines?country=us').subscribe(data =>{
      this.itemList = data;
    });*/

    /*
    this.fleetmanagerService.getData(`top-headlines?country=us&pageSize=${this.pageSize}&page=${this.page}`)
    .subscribe(data =>{
      this.itemList = data;
      this.length = data['totalResults'];
    });
    */
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

  onPageChange($event){
    /*
    this.fleetmanagerService.getData(`top-headlines?country=us&pageSize=${this.pageSize}&page=${$event.pageIndex + 1}`)
    .subscribe(data =>{
      this.itemList = data;
      this.length = data['totalResults'];
    });
    */
  }

}
