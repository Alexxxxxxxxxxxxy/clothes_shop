import { Output } from './interface-v2';
export declare class Base {
    protected userAgent: string;
    /**
     * get 请求参数处理
     * @param object query 请求参数
     * @param exclude 需要排除的字段
     * @returns
     */
    protected objectToQueryString(object: Record<string, any>, exclude?: string[]): string;
    /**
     * 获取请求头
     * @param authorization
     */
    protected getHeaders(authorization: string, headers?: {}): {
        Accept: string;
        'User-Agent': string;
        Authorization: string;
        'Accept-Encoding': string;
    };
    /**
     * post 请求
     * @param url  请求接口
     * @param params 请求参数
     * @deprecated 弃用
     */
    protected postRequest(url: string, params: Record<string, any>, authorization: string): Promise<Record<string, any>>;
    /**
     * post 请求 V2
     * @param url  请求接口
     * @param params 请求参数
     * @deprecated 弃用
     */
    protected postRequestV2(url: string, params: Record<string, any>, authorization: string, headers?: {}): Promise<Output>;
    /**
     * get 请求
     * @param url  请求接口
     * @param query 请求参数
     * @deprecated 弃用
     */
    protected getRequest(url: string, authorization: string, query?: Record<string, any>): Promise<Record<string, any>>;
    /**
     * get 请求 v2
     * @param url  请求接口
     * @param query 请求参数
     * @deprecated 弃用
     */
    protected getRequestV2(url: string, authorization: string, query?: Record<string, any>): Promise<Output>;
}
