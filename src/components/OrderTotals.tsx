import { formatCurrency } from '../helpers';
import { OrderItem } from '../types';

interface Props {
  order: OrderItem[];
}

export const OrderTotals = ({ order }: Props) => {
  if (order.length === 0) {
    return null; // Return nothing if the order is empty
  }

  const subtotal = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-3">
      <h2 className="font-black text-2xl border-b-2 border-gray-200 pb-1">
        Total & tip
      </h2>
      <p>
        Subtotal to be paid:{' '}
        <span className="font-bold">{formatCurrency(subtotal)}</span>
      </p>

      <p>
        Tip: <span className="font-bold">$0</span>
      </p>

      <p>
        Total to be paid: <span className="font-bold">$0</span>
      </p>
    </div>
  );
};
