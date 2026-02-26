import { Component, input } from '@angular/core';
import { productCategoryItem } from '../../../models/productCategoryItem.model';

@Component({
  selector: 'app-product-category',
  imports: [],
  templateUrl: './product-category.html',
  styleUrl: './product-category.css',
})
export class ProductCategory {
  categoriesItems = input<productCategoryItem[]>();
}
