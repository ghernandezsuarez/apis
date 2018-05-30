import { PaymentInterface } from './payment.interface';
/**
 * RequestPaymentModel interface
 * 
 * Definied in [UdeApiPayInServices.ApiRequestRequestPaymentModel](https://github.com/ChubbDigitalLatam/UDE-PayIN-SDK-v1-JScript/blob/master/docs/ApiRequestRequestPaymentModel.md)
 * 
 */
export interface RequestPaymentInterface {

    id: string;
    dateUtc: Date;
    data: PaymentInterface; 
}