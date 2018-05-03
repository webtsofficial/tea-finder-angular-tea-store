import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaShopHomeComponent } from './tea-shop-home.component';

describe('TeaShopHomeComponent', () => {
  let component: TeaShopHomeComponent;
  let fixture: ComponentFixture<TeaShopHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaShopHomeComponent ]
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
