import { OrderItem } from '../types';

interface Props {
  order: OrderItem[];
  children: React.ReactNode;
}

export const ShowIfOrderExists = ({ order, children }: Props) => {
  if (order.length === 0) {
    return <h2 className="font-bold text-4xl">Empty order</h2>;
  }
  return <>{children}</>;
};
  