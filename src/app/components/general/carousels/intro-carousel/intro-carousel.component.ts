import {
    Component,
    OnInit
} from '@angular/core';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {NguCarousel} from '@ngu/carousel';

@Component({
    selector: 'app-intro-carousel',
    templateUrl: './intro-carousel.component.html',
    styleUrls: ['./intro-carousel.component.scss']
})
export class IntroCarouselComponent implements OnInit {
    faChevronLeft = faChevronLeft;
    faChevronRight = faChevronRight;
    public introCarousel: NguCarousel;

    constructor() {
    }

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
