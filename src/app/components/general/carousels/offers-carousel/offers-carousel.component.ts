import { Component, OnInit } from '@angular/core';
import {NguCarousel} from '@ngu/carousel';
import {faPercent} from '@fortawesome/free-solid-svg-icons/faPercent';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons/faCaretRight';

@Component({
  selector: 'app-offers-carousel',
  templateUrl: './offers-carousel.component.html',
  styleUrls: ['./offers-carousel.component.scss']
})
export class OffersCarouselComponent implements OnInit {
    public offerCarousel: NguCarousel;
    faCaretLeft = faCaretLeft;
    faCaretRight = faCaretRight;
    faPercent = faPercent;

  constructor() { }

  ngOnInit() {
      this.offerCarousel = {
          grid: {xs: 1, sm: 2, md: 3, lg: 4, all: 0},
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

}
