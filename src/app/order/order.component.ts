import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  articles;

  constructor() { }

  ngOnInit() {
    this.getItemsAdded();
  }

  getItemsAdded(){
    const val = localStorage.getItem('items');
    if (!(val==null)){
      this.articles = JSON.parse(val);
    }

  }

  onDelete(item){
    const index = this.articles.indexOf(item);

    this.articles.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.articles));

  }



}
