import { useState } from 'react';
import { MenuItem, OrderItem } from '../types';

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    const newItem = { ...item, quantity: 1 };
    setOrder([...order, newItem]);
  };

  console.log(order);
  

  return { addItem };
};
