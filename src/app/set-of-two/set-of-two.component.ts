import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-of-two',
  templateUrl: './set-of-two.component.html',
  styleUrls: ['./set-of-two.component.scss']
})
export class SetOfTwoComponent implements OnInit {

  @Input() fields: any;
  className: string = "col-md";
  constructor() { }

  ngOnInit() {
  }

}
