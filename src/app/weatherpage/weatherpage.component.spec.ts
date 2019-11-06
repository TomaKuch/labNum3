import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherpageComponent } from './weatherpage.component';

describe('WeatherpageComponent', () => {
  let component: WeatherpageComponent;
  let fixture: ComponentFixture<WeatherpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
