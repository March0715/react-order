import React from 'react';
import {
  OrderItemDeleteButton,
  OrderItemImg,
  OrderItemState,
  OrderItemTitle,
  OrderItemWrapper,
} from '../common/styled';
import { OrderDataType } from '../common/type';

export const OrderItem = (props: { data: OrderDataType }) => {
  const { id, shop, img, state } = props.data;

  const handleDeleteOrder = () => {
    // eslint-disable-next-line no-console
    console.log('March-deleteID:', id);
    // 发送删除请求
  };

  return (
    <OrderItemWrapper>
      <OrderItemTitle>{shop}</OrderItemTitle>
      <OrderItemState>{state}</OrderItemState>
      <OrderItemImg src={img} />
      <OrderItemDeleteButton onClick={handleDeleteOrder}>
        删除订单
      </OrderItemDeleteButton>
    </OrderItemWrapper>
  );
};
