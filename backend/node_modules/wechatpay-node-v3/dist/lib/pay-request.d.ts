import { Output } from './interface-v2';
import { IPayRequest } from './pay-request.interface';
export declare class PayRequest implements IPayRequest {
    upload(url: string, params: Record<string, any>, headers: Record<string, any>): Promise<Output>;
    post(url: string, params: Record<string, any>, headers: Record<string, any>): Promise<Output>;
    get(url: string, headers: Record<string, any>): Promise<Output>;
}
