import { Injectable } from '@angular/core';
import { Product } from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'Product 1', 'This is the product 1 description. The product is really cool!', 100),
  ]

  constructor() { }
}
// test
