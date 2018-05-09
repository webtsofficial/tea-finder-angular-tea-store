import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaOverviewCardComponent } from './tea-overview-card.component';

describe('TeaOverviewCardComponent', () => {
  let component: TeaOverviewCardComponent;
  let fixture: ComponentFixture<TeaOverviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaOverviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
