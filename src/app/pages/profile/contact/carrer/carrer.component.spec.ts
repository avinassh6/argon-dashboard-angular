/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarrerComponent } from './carrer.component';

describe('CarrerComponent', () => {
  let component: CarrerComponent;
  let fixture: ComponentFixture<CarrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
