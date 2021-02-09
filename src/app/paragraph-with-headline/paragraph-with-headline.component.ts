import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-with-headline',
  templateUrl: './paragraph-with-headline.component.html',
  styleUrls: ['./paragraph-with-headline.component.scss']
})
export class ParagraphWithHeadlineComponent implements OnInit {

  @Input() fields: any;
  constructor() { }

  ngOnInit() {
    console.log("Fields inside paragrapph with heading: ", this.fields);
  }

}
