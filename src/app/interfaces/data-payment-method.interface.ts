import { CreditCardInterface } from './credit-card.interface';
import { BillingAddressInterface } from './billing-address.interface';
/**
 * DataPaymentMethod Interface
 * 
 * Definied in [UdeApiPayInServices.DataPaymentMethod](https://github.com/ChubbDigitalLatam/UDE-PayIN-SDK-v1-JScript/blob/master/docs/DataPaymentMethod.md)
 */
export interface DataPaymentMethodInterface {
    creditCard?: CreditCardInterface; 
    billingAddress?: BillingAddressInterface;
}