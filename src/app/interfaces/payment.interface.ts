import { TransactionInterface } from './transaction.interface';
import { DataSecurityInterface } from './data-security.interface';
import { BackUrlInterface } from './back-url.interface';
import { DataPaymentMethodInterface } from './data-payment-method.interface';
/**
 * Data RequesPaymentModel
 * 
 * Definied in [UdeApiPayInServices.RequestPaymentModel](https://github.com/ChubbDigitalLatam/UDE-PayIN-SDK-v1-JScript/blob/master/docs/RequestPaymentModel.md)
 */


export interface PaymentInterface {
    countryCode: string;
    languageCode?: string;
    coreSystem: string;
    deviceId: string;
    transaction: TransactionInterface;
    dataSecurity: DataSecurityInterface;
    backUrl?: BackUrlInterface; 
    paymentMethod: string; //TODO: Preguntar > UDE Payment Method - Check availability per Country
    paymentNetwork: string;
    dataPaymentMethod?: DataPaymentMethodInterface; 
    dataPolicy?: any;

}