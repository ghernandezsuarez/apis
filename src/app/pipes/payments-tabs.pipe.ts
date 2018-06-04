import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentsTabs'
})
export class PaymentsTabsPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let pay_methods:any [];
    let countrySelected;

   value.filter( country => {

      if(country.code === args) {

        if(!country.pay_methods) {

          return false;
        } else {
          countrySelected = country.pay_methods;
        }
         
      }

    } )

    return countrySelected;
  }

}
