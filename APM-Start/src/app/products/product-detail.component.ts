import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor( private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.product = this.activatedRoute.snapshot.data['product'];
    }

}
