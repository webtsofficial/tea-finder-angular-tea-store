import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaShopHomeComponent } from './tea-shop-home.component';
import {NguCarouselModule} from '@ngu/carousel';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TeafinderSummarizeComponent} from '../../../view/tea-shop-home/teafinder-summarize/teafinder-summarize.component';

describe('TeaShopHomeComponent', () => {
  let component: TeaShopHomeComponent;
  let fixture: ComponentFixture<TeaShopHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          TeaShopHomeComponent,
          TeafinderSummarizeComponent
      ],
      imports: [
          NguCarouselModule,
          FontAwesomeModule
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
