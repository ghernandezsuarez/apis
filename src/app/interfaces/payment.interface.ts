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

    /**
     * Pais en el que se va a a procesar Viene del request POST
     */
    countryCode: string;

    /**
     * No esta definido
     */
    languageCode?: string;

    /**
     * SYS6 es el unico que genera polizas
     */
    coreSystem: string;

    /**
     * Acceso a la aplicacion . Definido en las variable de ambiente
     */
    deviceId: string;

    transaction: TransactionInterface;

    /**
     * TODO: Revisar con Gerardo
     */
    dataSecurity: DataSecurityInterface;

    /**
     * TODO: Revisar con Gerardo
     * 
     * Faltan URL
     * - Cancel
     * -
     */
    backUrl?: BackUrlInterface; 

    /**
     * Solo Credit Card por el momento
     */
    paymentMethod: string; //TODO: Preguntar > UDE Payment Method - Check availability per Country

    /**
     * Tipos de tarjeta , VISA , DIners, etc...
     * 
     * TODO: consultar el funcionameinto Tokenext iframe
     */
    paymentNetwork: string;
    

    dataPaymentMethod?: DataPaymentMethodInterface; 
    


    /**
     * Estos son los datos de la poliza y deben venir 
     */
    dataPolicy?: any;

}