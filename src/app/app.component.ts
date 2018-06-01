import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  styles : [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  title: string = 'DATOS DE PAGO';
  tokenUDE: string;

  dataPayForm: FormGroup;

  selectedCountry: string;

  dataPay = {
    country: '',
    locale: ''
  };

  countryControl = new FormControl('', [Validators.required]);

  countries = [
    {code: 'BRA', name: 'Brazil'},
    {code: 'COL', name: 'Colombia'}
  ]

  locales = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'Ingles'}
  ]

  constructor(
    private route: ActivatedRoute
  ) {
    this.subscription = this.route.queryParamMap.subscribe(
      (queryParams: any) => {
        console.log(queryParams);

        this.tokenUDE = queryParams['params']['tokenUDE']

        console.log(this.tokenUDE);

      }
    )
  }

  ngOnInit(){

    this.createForm();

    // this.route.queryParamMap.subscribe((parametros: any) => {
      
    //   this.tokenUDE = parametros['params'];

    //   console.log(this.tokenUDE);
    
    
    // } );
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    
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
