import { Component } from '@angular/core';
import { Banner } from './banner/banner';
import { ProductCategory } from './product-category/product-category';
import { FeaturedProducts } from './featured-products/featured-products';

@Component({
  selector: 'app-home',
  imports: [Banner, ProductCategory, FeaturedProducts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
