import { useState } from 'react';
import { OrderItem } from '../types';

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [total, setTotal] = useState(0);
  const [auth, seAuht] = useState(false);

  return {
    
  };
};
