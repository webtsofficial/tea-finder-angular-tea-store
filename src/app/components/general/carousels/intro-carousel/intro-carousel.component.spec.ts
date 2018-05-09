import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {IntroCarouselComponent} from './intro-carousel.component';
import {NguCarouselModule} from '@ngu/carousel';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

describe('IntroCarouselComponent', () => {
    let component: IntroCarouselComponent;
    let fixture: ComponentFixture<IntroCarouselComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IntroCarouselComponent],
            imports: [
                NguCarouselModule,
                FontAwesomeModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IntroCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
