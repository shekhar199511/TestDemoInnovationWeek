import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithCaptionComponent } from './image-with-caption.component';

describe('ImageWithCaptionComponent', () => {
  let component: ImageWithCaptionComponent;
  let fixture: ComponentFixture<ImageWithCaptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageWithCaptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWithCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
