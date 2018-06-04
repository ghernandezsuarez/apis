import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentsTabs'
})
export class PaymentsTabsPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    console.log(value);
    return value.filter( country => country.name === args );
  }

}
