import { formatCurrency } from '../helpers';
import { OrderItem } from '../types';

interface Props {
  order: OrderItem[];
  tipPercentage: number;
  placeOrder: () => void;
}

export const OrderTotals = ({ order, tipPercentage, placeOrder }: Props) => {
  const subtotal = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tip = subtotal * tipPercentage;

  const total = subtotal + tip;

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl border-b-2 border-gray-200 pb-1">
          Total & Tip
        </h2>
        <p>
          Subtotal to be paid:{' '}
          <span className="font-bold">{formatCurrency(subtotal)}</span>
        </p>

        <p>
          Tip: <span className="font-bold">{formatCurrency(tip)}</span>
        </p>

        <p>
          Total to be paid:{' '}
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>

      <button
        className="w-full bg-teal-700 text-white font-bold p-2 uppercase hover:bg-teal-800 rounded-md"
        onClick={placeOrder}
      >
        Save order
      </button>
    </>
  );
};
