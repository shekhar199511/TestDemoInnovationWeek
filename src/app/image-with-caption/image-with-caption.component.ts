import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-caption',
  templateUrl: './image-with-caption.component.html',
  styleUrls: ['./image-with-caption.component.scss']
})
export class ImageWithCaptionComponent implements OnInit {

  @Input() fields: any;
  @Input() className: string;
  imageURL: string;
  constructor() { }

  ngOnInit() {
    console.log("Inside image with caption: ",this.className);
    this.imageURL = (this.fields.fields.image && this.fields.fields.image.fields.file) ? this.fields.fields.image.fields.file.url : this.fields.defaultImageURL;
  }

}
