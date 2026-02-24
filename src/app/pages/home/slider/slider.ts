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

  next() {
    const toralImage = this.items().length;

    if(this.currentIndex() < toralImage -1) {
      this.currentIndex.update(i => i + 1);
    }else{
      this.currentIndex.set(0);
    }
  }

  prev() {
    const toralImage = this.items().length;

    if(this.currentIndex() > 0) {
      this.currentIndex.update(i => i -1);
    }else {
      this.currentIndex.set(toralImage - 1);
    }
  }
}
