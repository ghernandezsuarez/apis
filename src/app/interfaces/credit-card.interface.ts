/**
 * CreditCard interface
 * 
 * Definied in [UdeApiPayInServices.CreditCard](https://github.com/ChubbDigitalLatam/UDE-PayIN-SDK-v1-JScript/blob/master/docs/CreditCard.md)
 */
export interface CreditCardInterface {
    _number?: string;
    month?: string;
    year?: string;
    verificationValue?: string;
    firstName?: string;
    lastName?: string;
}