import { useState } from 'react';
import { OrderItem } from '../types';

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tipPercentage, setTipPercentage] = useState<number>(0);

  const placeOrder = () => {
    setOrder([]);
    setTipPercentage(0);
  };

  return {
    order,
    tipPercentage,
    setTipPercentage,
    placeOrder,
  };
};
