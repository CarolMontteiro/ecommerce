import { Component } from '@angular/core';
import { Slider } from './slider/slider';
import { ProductCategory } from './product-category/product-category';
import { FeaturedProducts } from './featured-products/featured-products';
import { sliderItem } from '../../models/sliderItem.model';

@Component({
  selector: 'app-home',
  imports: [Slider, ProductCategory, FeaturedProducts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public sliderData: sliderItem[] = [
    {
      id:'1',
      image: 'assets/images/slider/slider1.webp',
      alt:'Promoção'
    },
    {
      id:'2',
      image: 'assets/images/slider/slider2.webp',
      alt:'Segurança e Sastifação'
    },
    {
      id:'3',
      image: 'assets/images/slider/slider3.webp',
      alt:'Casa e cozinha'
    },
  ];
}
