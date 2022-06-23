import { Injectable } from '@angular/core';


import { Book } from './product-list/model/Book';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  // httpOptions = {Headers: new HttpHeaders({'content-type': 'application/json'})}

  constructor() { }


  livros: Book[] = [
    {
      id : '1',
      name : 'Book1',
      price : 20,
      quantity : 10,
      category :  'terror',
      img : 'https://picsum.photos/300'
    },
    {
      id : '2',
      name : 'Book2',
      price : 50,
      quantity : 22,
      category :  'comedy',
      img : 'https://picsum.photos/300'
    },
    {
      id : '3',
      name : 'Book3',
      price : 75,
      quantity : 33,
      category :  'drama',
      img : 'https://picsum.photos/300'
    },
    {
      id : '4',
      name : 'Book4',
      price : 24,
      quantity : 7,
      category :  'novel',
      img : 'https://picsum.photos/300'
    }       
  ]

  getBook(): Array<Book>{
    return this.livros
  }
}
