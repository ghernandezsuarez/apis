/**
 * Transaction interface
 * 
 * Definied in [UdeApiPayInServices.Transaction](https://github.com/ChubbDigitalLatam/UDE-PayIN-SDK-v1-JScript/blob/master/docs/Transaction.md)
 */
export interface TransactionInterface {

    /**
     * Valor a cobrar
     */
    amount: number;

    /**
     * Moneda
     */
    currency: string;

    /**
     * String menor de 30 caracteres
     */
    description: string;

    /**
     * 1 Se cobra y genera la poliza
     * 2 Solo se cobra
     */
    type: number;
}