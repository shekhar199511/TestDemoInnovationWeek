import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() fields: any;
  @Input() defaultImageURL: string;
  imageURL: string;

  constructor() {
    
  }
  ngOnInit() {
    this.imageURL = (this.fields.fields.logo && this.fields.fields.logo.fields.file) ? this.fields.fields.logo.fields.file.url : this.defaultImageURL;
  }

}
