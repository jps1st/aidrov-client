import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditCitizenProfileComponent} from './pricing.component';

describe('PricingComponent', () => {
    let component: EditCitizenProfileComponent;
    let fixture: ComponentFixture<EditCitizenProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditCitizenProfileComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditCitizenProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
