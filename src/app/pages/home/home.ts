import { Component } from '@angular/core';
import { Slider } from './slider/slider';
import { ProductCategory } from './product-category/product-category';
import { FeaturedProducts } from './featured-products/featured-products';
import { sliderItem } from '../../models/sliderItem.model';
import { productCategoryItem } from '../../models/productCategoryItem.model';

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

  public productCategoryData: productCategoryItem[] = [
    {
      name: 'Eletrônicos',
      image: 'assets/images/product-category/category1.webp'
    },

    {
      name: 'Casa',
      image: 'assets/images/product-category/category2.webp'
    },

    {
      name: 'Alimentos e Bebidas',
      image: 'assets/images/product-category/category3.webp'
    },

    {
      name: 'Vestuário',
      image: 'assets/images/product-category/category4.webp'
    },

    {
      name: 'Construções',
      image: 'assets/images/product-category/category5.webp'
    },

    {
      name: 'Cuidados Pessoais',
      image: 'assets/images/product-category/category6.webp'
    },

    {
      name: 'Games e Console',
      image: 'assets/images/product-category/category7.webp'
    },

    {
      name: 'Papelaria e Escritório',
      image: 'assets/images/product-category/category8.webp'
    },

    {
      name: 'Casa Inteligente',
      image: 'assets/images/product-category/category9.webp'
    },
  ]
}
