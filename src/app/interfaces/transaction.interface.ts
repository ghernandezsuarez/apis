/**
 * Transaction interface
 * 
 * Definied in [UdeApiPayInServices.Transaction](https://github.com/ChubbDigitalLatam/UDE-PayIN-SDK-v1-JScript/blob/master/docs/Transaction.md)
 */
export interface TransactionInterface {
    amount: number;
    currency: string;
    description: string;
    type: number;
}