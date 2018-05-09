import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {TeafinderSummarizeComponent} from './teafinder-summarize.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

describe('TeafinderSummarizeComponent', () => {
    let component: TeafinderSummarizeComponent;
    let fixture: ComponentFixture<TeafinderSummarizeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeafinderSummarizeComponent],
            imports: [
                FontAwesomeModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeafinderSummarizeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
