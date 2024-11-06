import { OrderItem } from '../types';

interface Props {
  order: OrderItem[];
  children: React.ReactNode;
}

export const ShowIfOrderExists = ({ order, children }: Props) => {
  if (order.length === 0) {
    return <p className="text-center font-bold text-xl">Empty order</p>;
  }
  return <>{children}</>;
};
