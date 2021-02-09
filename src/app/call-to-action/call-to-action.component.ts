import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {

  @Input() fields: any;
  @Input() className: string;
  constructor() { }

  ngOnInit() {
    console.log("Fields in call to action : ", this.fields);
  }

}
