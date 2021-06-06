import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book";
import {BookStoreService} from "../../services/book-store.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Book[] = []
  columns = ['id','author','title','price']

  constructor(private _bookService: BookStoreService) { }

  ngOnInit(): void {
    this._bookService.getCatalog()
      .subscribe(res => {
        this.books = res
      })
  }

}
