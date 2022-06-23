import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { Book } from './model/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: Array<Book>;

  constructor(private ProductListService: ProductListService) { }

  ngOnInit(): void {

    this.livros = this.ProductListService.getBook()

    
  }

}
