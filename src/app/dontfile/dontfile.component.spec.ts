/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DontfileComponent } from './dontfile.component';

describe('DontfileComponent', () => {
  let component: DontfileComponent;
  let fixture: ComponentFixture<DontfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DontfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DontfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
