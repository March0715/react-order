import React from 'react';
import { OrderDataType, showState } from '../common/type';
import { OrderItem } from './OrderItem';

type OrderListProps = {
  show: showState;
  data: OrderDataType[] | null;
};

export const OrderList = (props: OrderListProps) => {
  if (!props.data) return null;

  return (
    <div>
      {props.data.map((ele: OrderDataType) => {
        if (props.show !== '全部' && ele.state !== props.show) return null;
        return <OrderItem key={ele.id} data={ele} />;
      })}
    </div>
  );
};
