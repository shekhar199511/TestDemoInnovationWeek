import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOfTwoComponent } from './set-of-two.component';

describe('SetOfTwoComponent', () => {
  let component: SetOfTwoComponent;
  let fixture: ComponentFixture<SetOfTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOfTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOfTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
