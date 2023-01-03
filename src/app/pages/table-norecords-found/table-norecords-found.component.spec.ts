/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableNorecordsFoundComponent } from './table-norecords-found.component';

describe('TableNorecordsFoundComponent', () => {
  let component: TableNorecordsFoundComponent;
  let fixture: ComponentFixture<TableNorecordsFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNorecordsFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNorecordsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
