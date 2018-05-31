/**
 * BackUrl Interface
 * 
 * Definied in [UdeApiPayInServices.BackUrl](https://github.com/ChubbDigitalLatam/UDE-PayIN-SDK-v1-JScript/blob/master/docs/BackUrl.md)
 */
export interface BackUrlInterface {
    urlCreate?: string;
    urlFailure?: string;
    urlCancel?: string;
    urlPaid: string;
}