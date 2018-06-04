import { Component, OnChanges, Input, SimpleChange } from '@angular/core';
import { PAYMENTS_DATA } from '../../app.constants';

@Component({
  selector: 'apis-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnChanges {

  @Input() country: string;

  countrySelected: string;

  countriesList = PAYMENTS_DATA;

  constructor() {

    console.log(this.countriesList);
   }

  ngOnChanges( changes: { [propKey: string]: SimpleChange } ) {

    this.countrySelected = changes.country.currentValue;
  }

}
