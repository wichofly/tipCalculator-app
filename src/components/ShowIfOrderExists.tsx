import { OrderItem } from '../types';

interface Props {
  order: OrderItem[];
  children: React.ReactNode;
}

export const ShowIfOrderExists = ({ order, children }: Props) => {
  if (order.length === 0) {
    return null;
  }
  return <>{children}</>;
};
