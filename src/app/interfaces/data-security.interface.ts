/**
 * DataSecurity Interface
 * 
 * Definied in [UdeApiPayInServices.DataSecurity](https://github.com/ChubbDigitalLatam/UDE-PayIN-SDK-v1-JScript/blob/master/docs/DataSecurity.md)
 */
export interface DataSecurityInterface {
    deviceSessionId?: string;
    ipAddress?: string;
    cookie?: string;
    userAgent?: string;
}