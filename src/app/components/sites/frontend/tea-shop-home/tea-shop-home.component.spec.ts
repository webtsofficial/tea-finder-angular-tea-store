import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaShopHomeComponent } from './tea-shop-home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TeafinderSummarizeComponent} from '../../../view/tea-shop-home/teafinder-summarize/teafinder-summarize.component';
import {OffersCarouselComponent} from '../../../general/carousels/offers-carousel/offers-carousel.component';
import {IntroCarouselComponent} from '../../../general/carousels/intro-carousel/intro-carousel.component';
import {NguCarouselModule} from '@ngu/carousel';
import {TeaOverviewCardComponent} from '../../../general/cards/tea-overview-card/tea-overview-card.component';

describe('TeaShopHomeComponent', () => {
  let component: TeaShopHomeComponent;
  let fixture: ComponentFixture<TeaShopHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          TeaShopHomeComponent,
          TeafinderSummarizeComponent,
          OffersCarouselComponent,
          IntroCarouselComponent,
          TeaOverviewCardComponent
      ],
      imports: [
          FontAwesomeModule,
          NguCarouselModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaShopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
