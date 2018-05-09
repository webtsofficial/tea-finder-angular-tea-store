import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCarouselComponent } from './offers-carousel.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NguCarouselModule} from '@ngu/carousel';
import {TeaOverviewCardComponent} from '../../cards/tea-overview-card/tea-overview-card.component';

describe('OffersCarouselComponent', () => {
  let component: OffersCarouselComponent;
  let fixture: ComponentFixture<OffersCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          OffersCarouselComponent,
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
    fixture = TestBed.createComponent(OffersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
