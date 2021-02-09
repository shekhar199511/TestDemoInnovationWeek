import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-with-image',
  templateUrl: './text-with-image.component.html',
  styleUrls: ['./text-with-image.component.scss']
})
export class TextWithImageComponent implements OnInit {

  @Input() fields: any;
  @Input() className: string;
  imageURL: string;
  constructor() { }

  ngOnInit() {
    this.imageURL = (this.fields.fields.image && this.fields.fields.image.fields.file) ? this.fields.fields.image.fields.file.url : this.fields.defaultImageURL;
  }

}
