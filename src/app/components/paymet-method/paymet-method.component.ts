import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'apis-paymet-method',
  templateUrl: './paymet-method.component.html',
  styleUrls: ['./paymet-method.component.css']
})
export class PaymetMethodComponent implements OnChanges {

  @Input('country') selectedCountry: string;

  constructor() {

    console.log(this.selectedCountry);

   }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){

    console.log(changes);
  }

}
