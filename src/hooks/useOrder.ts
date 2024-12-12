import { useState } from 'react';
import { MenuItem, OrderItem } from '../types';

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tipPercentage, setTipPercentage] = useState<number>(0);

  const removeItem = (id: MenuItem['id']) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTipPercentage(0);
  };

  return {
    order,
    tipPercentage,
    setTipPercentage,

    removeItem,
    placeOrder,
  };
};
