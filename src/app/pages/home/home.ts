import { Component } from '@angular/core';
import { Slider } from './slider/slider';
import { ProductCategory } from './product-category/product-category';
import { FeaturedProducts } from './featured-products/featured-products';

@Component({
  selector: 'app-home',
  imports: [Slider, ProductCategory, FeaturedProducts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
