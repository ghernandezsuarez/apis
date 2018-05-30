/**
 * BillingAddress Interface
 * 
 * Definied in [UdeApiPayInServices.BillingAddress](https://github.com/ChubbDigitalLatam/UDE-PayIN-SDK-v1-JScript/blob/master/docs/BillingAddress.md)
 */
export interface BillingAddressInterface {

    name?: string; 
    address1?: string;
    address2?: string;
    city?: string; 
    state?: string;
    zip?: string;
    country?: string;
    phone?: string;
    
}