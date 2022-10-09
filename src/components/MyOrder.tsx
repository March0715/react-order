import React, { Fragment, useEffect, useState } from 'react';
import { showState } from '../common/type';
import { request } from '../utils/request';
import { OrderList } from './OrderList';

export const MyOrder = () => {
  const [orderData, setOrderData] = useState(null);
  const [show, setShow] = useState<showState>('全部');
  useEffect(() => {
    request('get', 'order').then((res) => {
      setOrderData(res.data);
    });
  }, []);
  return (
    <Fragment>
      <OrderList show={show} data={orderData} />
    </Fragment>
  );
};
