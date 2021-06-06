import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book";
import {BookStoreService} from "../../services/book-store.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Book[] = []
  columns = ['id','author','title','price']

  constructor(private _bookService: BookStoreService) { }

  ngOnInit(): void {
    this._bookService.getOrders()
      .subscribe(res => {
        this.orders = res
      })
  }

}
