import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  articles;

  constructor(private snackBar: MatSnackBar) { }

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
    this.snackBar.open('Item Deleted', 'OK', {duration: 3000});

  }



}
