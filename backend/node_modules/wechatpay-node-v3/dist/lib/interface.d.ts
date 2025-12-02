/// <reference types="node" />
interface Iamount {
    total: number;
    currency?: string;
}
interface Idetail {
    cost_price?: number;
    invoice_id?: string;
    goods_detail?: IgoodsDetail[];
}
interface IgoodsDetail {
    merchant_goods_id: string;
    wechatpay_goods_id?: string;
    goods_name?: string;
    quantity: number;
    unit_price: number;
}
interface Ipayer {
    openid: string;
}
interface IsceneInfoH5 {
    payer_client_ip: string;
    device_id?: string;
    store_info?: IstoreInfo;
    h5_info: Ih5Info;
}
interface IsceneInfoNative {
    payer_client_ip: string;
    device_id?: string;
    store_info?: IstoreInfo;
}
interface IstoreInfo {
    id: string;
    name?: string;
    area_code?: string;
    address?: string;
}
interface Ih5Info {
    type: string;
    app_name: string;
    app_url?: string;
    bundle_id?: string;
    package_name?: string;
}
export interface Ioptions {
    userAgent?: string;
    authType?: string;
    key?: string;
    serial_no?: string;
}
export interface Ipay {
    appid: string;
    mchid: string;
    serial_no?: string;
    publicKey: Buffer;
    privateKey: Buffer;
    authType?: string;
    userAgent?: string;
    key?: string;
}
export interface Ih5 {
    appid?: string;
    mchid?: string;
    description: string;
    out_trade_no: string;
    time_expire?: string;
    attach?: string;
    notify_url: string;
    goods_tag?: string;
    amount: Iamount;
    detail?: Idetail;
    scene_info: IsceneInfoH5;
}
export interface Inative {
    appid?: string;
    mchid?: string;
    description: string;
    out_trade_no: string;
    time_expire?: string;
    attach?: string;
    notify_url: string;
    goods_tag?: string;
    support_fapiao?: boolean;
    amount: Iamount;
    detail?: Idetail;
    scene_info?: IsceneInfoNative;
    settle_info?: {
        profit_sharing?: boolean;
    };
}
export interface Ijsapi {
    appid?: string;
    mchid?: string;
    description: string;
    out_trade_no: string;
    time_expire?: string;
    attach?: string;
    notify_url: string;
    goods_tag?: string;
    amount: Iamount;
    payer: Ipayer;
    detail?: Idetail;
    scene_info?: IsceneInfoNative;
}
export interface Iapp {
    appid?: string;
    mchid?: string;
    description: string;
    out_trade_no: string;
    time_expire?: string;
    attach?: string;
    notify_url: string;
    goods_tag?: string;
    amount: Iamount;
    detail?: Idetail;
    scene_info?: IsceneInfoNative;
}
export interface Iquery1 {
    transaction_id: string;
    out_trade_no?: string;
}
export interface Iquery2 {
    transaction_id?: string;
    out_trade_no: string;
}
export interface Itradebill {
    bill_date: string;
    sub_mchid?: string;
    bill_type: string;
    tar_type?: string;
}
export interface Ifundflowbill {
    bill_date: string;
    account_type: string;
    tar_type?: string;
}
export interface Irefunds {
    out_refund_no: string;
    reason?: string;
    notify_url?: string;
    funds_account?: string;
    amount: IRamount;
    goods_detail?: IRgoodsDetail[];
}
export interface Irefunds1 extends Irefunds {
    transaction_id: string;
    out_trade_no?: string;
}
export interface Irefunds2 extends Irefunds {
    transaction_id?: string;
    out_trade_no: string;
}
interface IRamount {
    total: number;
    currency: string;
    refund: number;
}
interface IRgoodsDetail {
    merchant_goods_id: string;
    wechatpay_goods_id?: string;
    goods_name?: string;
    refund_quantity: number;
    unit_price: number;
    refund_amount: number;
}
/**
 * 证书信息
 */
export interface ICertificates {
    effective_time: string;
    expire_time: string;
    serial_no: string;
    publicKey?: string;
    encrypt_certificate: {
        algorithm: string;
        associated_data: string;
        ciphertext: string;
        nonce: string;
    };
}
export {};
