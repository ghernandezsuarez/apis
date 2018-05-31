import { RequestPaymentInterface } from '../interfaces/request-payment.interface';
import { PaymentInterface } from '../interfaces/payment.interface';

export class PaymentModel implements RequestPaymentInterface {

    public id: string;
    public dateUtc: Date;
    public data: PaymentInterface; 

    constructor() {

        this.id = null;
        this.dateUtc = null;
        this.data = null;

    }

}