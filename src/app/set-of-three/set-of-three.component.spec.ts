import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOfThreeComponent } from './set-of-three.component';

describe('SetOfThreeComponent', () => {
  let component: SetOfThreeComponent;
  let fixture: ComponentFixture<SetOfThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOfThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOfThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
