/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CollegegridComponent } from './collegegrid.component';

describe('CollegegridComponent', () => {
  let component: CollegegridComponent;
  let fixture: ComponentFixture<CollegegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
