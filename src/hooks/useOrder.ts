import { useState } from 'react';
import { MenuItem, OrderItem } from '../types';

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tipPercentage, setTipPercentage] = useState<number>(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

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
    addItem,
    removeItem,
    placeOrder,
  };
};
