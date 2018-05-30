import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { RequestPaymentInterface } from '../interfaces/request-payment.interface';

@Injectable({
  providedIn: 'root'
})
export class UdeApiPayInService {

  constructor( private http: HttpClient) { }

  getRequestPayment( requestPayment: RequestPaymentInterface ){
    
  }

}
