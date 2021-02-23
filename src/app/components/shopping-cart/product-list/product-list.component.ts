import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log(this.productService.getProducts())
  }

}
