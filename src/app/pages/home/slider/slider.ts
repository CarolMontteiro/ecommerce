import { Component, input, OnDestroy, OnInit, signal } from '@angular/core';

//Interface
import { sliderItem } from '../../../models/sliderItem.model';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider implements OnInit, OnDestroy {
 
  items = input.required<sliderItem[]>();

  public currentIndex = signal(0);

  private intervalId: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }

  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 6000);
  }

  next() {
    const totalImage = this.items().length;
    if(!totalImage) return;

    this.currentIndex.update(i => (i + 1) % totalImage);
  }

  prev() {
    const totalImage = this.items().length;
    if(!totalImage) return;

    this.currentIndex.update(i => (i - 1 + totalImage) % totalImage);
  }
}
