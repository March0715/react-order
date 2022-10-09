import styled from 'styled-components';

export const OrderItemWrapper = styled('div')`
  position: relative;
  height: 200px;
  left: 10px;
  right: 10px;
  border: 2px solid black;
  margin: 2px;
  border-radius: 10px;
`;

export const OrderItemTitle = styled('div')`
  position: absolute;
  height: 20px;
  font-size: 20px;
  width: 200px;
  left: 10px;
  top: 10px;
`;

export const OrderItemState = styled('div')`
  position: absolute;
  height: 20px;
  text-align: right;
  font-size: 20px;
  width: 200px;
  right: 10px;
  top: 10px;
`;

export const OrderItemImg = styled('img')`
  position: absolute;
  height: 150px;
  width: 150px;
  left: 10px;
  top: 40px;
`;

export const OrderItemDeleteButton = styled('button')`
  position: absolute;
  height: 25px;
  width: 70px;
  right: 10px;
  bottom: 10px;
`;
