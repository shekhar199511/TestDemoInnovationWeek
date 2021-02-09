import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {

  @Input() fields: any;
  imageURL:string = '';
  constructor() { }

  ngOnInit() {
    if (this.fields.fields.cloudinaryImage && this.fields.fields.cloudinaryImage[0] && this.fields.fields.cloudinaryImage[0].secure_url) {
      this.imageURL = this.fields.fields.cloudinaryImage[0].secure_url + '?w=1600&q=80&fm=webp';
    } else {
      this.imageURL = (this.fields.fields.image && this.fields.fields.image.fields.file) ? this.fields.fields.image.fields.file.url : this.fields.defaultImageURL;
      this.imageURL = this.imageURL + '?w=1600&q=80&fm=jpg&fl=progressive';
    }
  }

}
