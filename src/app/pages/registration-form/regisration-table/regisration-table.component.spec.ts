/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegisrationTableComponent } from './regisration-table.component';

describe('RegisrationTableComponent', () => {
  let component: RegisrationTableComponent;
  let fixture: ComponentFixture<RegisrationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisrationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisrationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
