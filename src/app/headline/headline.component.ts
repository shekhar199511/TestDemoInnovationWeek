import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  @Input() fields: any;
  @Input() className: string;
  constructor() { }

  ngOnInit() {
    console.log("Fields in headline: ", this.fields);
  }

}
