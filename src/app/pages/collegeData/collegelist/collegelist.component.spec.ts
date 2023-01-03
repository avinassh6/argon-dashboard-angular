/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollegelistComponent } from './collegelist.component';

describe('CollegelistComponent', () => {
  let component: CollegelistComponent;
  let fixture: ComponentFixture<CollegelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
