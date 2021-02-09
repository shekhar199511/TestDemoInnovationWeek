import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-of-three',
  templateUrl: './set-of-three.component.html',
  styleUrls: ['./set-of-three.component.scss']
})
export class SetOfThreeComponent implements OnInit {

  @Input() fields: any;
  className: string = "col-lg";
  constructor() { }

  ngOnInit() {
    console.log("Inside set of three: ",this.fields);
  }

}
