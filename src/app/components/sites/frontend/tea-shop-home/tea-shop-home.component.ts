import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';


@Component({
  selector: 'app-tea-shop-home',
  templateUrl: './tea-shop-home.component.html',
  styleUrls: ['./tea-shop-home.component.scss']
})
export class TeaShopHomeComponent implements OnInit {

  public introCarousel: NguCarousel;
    faChevronLeft = faChevronLeft;
    faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit() {
      this.introCarousel = {
          grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
          slide: 1,
          speed: 600,
          interval: 4000,
          point: {
              visible: true
          },
          load: 2,
          touch: true,
          loop: true,
          custom: 'banner'
      };
  }

  public introCarouselFunc(event: Event) {

  }

}
