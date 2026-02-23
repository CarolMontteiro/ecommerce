import { Component, input, signal } from '@angular/core';

//Interface
import { sliderItem } from '../../../models/sliderItem.model';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider  {
 
  items = input.required<sliderItem[]>();

  public currentIndex = signal(0);


}
