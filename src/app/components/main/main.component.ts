import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { PAYMENTS_DATA } from "../../app.constants";


import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'apis-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  title: string = 'DATOS DE PAGO';

  dataPayForm: FormGroup;

  currentDate= new Date();

  selectedCountry: string;

  dataPay = {
    country: '',
    locale: ''
  };

  countryControl = new FormControl('', [Validators.required]);

  countries = PAYMENTS_DATA;

  locales = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'Ingles'}
  ];

  constructor(
    
  ) {
  }

  ngOnInit(){

    this.createForm();


    
  }

  onCountryChange( event: MatSelectChange ){

    if(event['isUserInput']){
      this.selectedCountry = event.source.value;
}

  }


  createForm(): void {
    this.dataPayForm = new FormGroup({
      'country': new FormControl( this.dataPay.country, [
        Validators.required
      ] ),

      'locale': new FormControl( this.dataPay.locale, [
        Validators.required
      ] )
    }
  )
  }

}
