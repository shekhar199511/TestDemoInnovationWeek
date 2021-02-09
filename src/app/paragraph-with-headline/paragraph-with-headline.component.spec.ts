import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphWithHeadlineComponent } from './paragraph-with-headline.component';

describe('ParagraphWithHeadlineComponent', () => {
  let component: ParagraphWithHeadlineComponent;
  let fixture: ComponentFixture<ParagraphWithHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphWithHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphWithHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
