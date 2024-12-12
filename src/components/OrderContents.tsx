import { Dispatch } from 'react';
import { formatCurrency } from '../helpers';
import { OrderItem } from '../types';
import { OrderActions } from '../reducers/orderReducer';

interface Props {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>;
}

export const OrderContents = ({ order, dispatch }: Props) => {
  return (
    <div>
      <h2 className="font-bold text-4xl">Consume</h2>

      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-bold">
                Quantity: {item.quantity} -{' '}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              className="bg-red-400 h-8 w-8 rounded-full font-bold text-white"
              onClick={() =>
                dispatch({
                  type: 'remove-order',
                  payload: { id: item.id },
                })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
