import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyOrder } from './components/MyOrder';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyOrder />
  </React.StrictMode>
);
