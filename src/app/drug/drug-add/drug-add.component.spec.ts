/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrugAddComponent } from './drug-add.component';

describe('DrugAddComponent', () => {
  let component: DrugAddComponent;
  let fixture: ComponentFixture<DrugAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
