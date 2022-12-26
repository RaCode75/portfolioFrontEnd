import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardhComponent } from './cardh.component';

describe('CardhComponent', () => {
  let component: CardhComponent;
  let fixture: ComponentFixture<CardhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
