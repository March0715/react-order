import React, { Fragment, useEffect, useState } from 'react';
import { request } from '../utils/request';

export const MyOrder = () => {
  const [orderData, setOrderData] = useState(null);
  useEffect(() => {
    request('get', 'order').then((res) => {
      setOrderData(res.data);
    });
  }, []);
  return <Fragment>{orderData ? JSON.stringify(orderData) : ''}</Fragment>;
};
