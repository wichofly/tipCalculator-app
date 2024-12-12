import { Dispatch } from 'react';
import { formatCurrency } from '../helpers';
import { OrderItem } from '../types';
import { OrderActions } from '../reducers/orderReducer';

interface Props {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
}

export const OrderTotals = ({ order, tip, dispatch }: Props) => {
  const subtotal = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const bonus = subtotal * tip;

  const total = subtotal + bonus;

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
          Tip: <span className="font-bold">{formatCurrency(bonus)}</span>
        </p>

        <p>
          Total to be paid:{' '}
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>

      <button
        className="w-full bg-teal-700 text-white font-bold p-2 uppercase hover:bg-teal-800 rounded-md"
        onClick={() => dispatch({ type: 'place-order' })}
      >
        Save order
      </button>
    </>
  );
};
