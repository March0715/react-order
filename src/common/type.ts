export type orderState = '待支付' | '待发货' | '待收货/使用';

export type showState = orderState | '全部';

export type OrderDataType = {
  id: number;
  shop: string;
  state: orderState;
  title: string;
  desc: string;
  acount: number;
  price: number;
  insurance: string[];
  img: string;
};
