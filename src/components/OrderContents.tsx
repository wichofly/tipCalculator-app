import { formatCurrency } from '../helpers';
import { MenuItem, OrderItem } from '../types';

interface Props {
  order: OrderItem[];
  removeItem: (id: MenuItem['id']) => void;
}

export const OrderContents = ({ order, removeItem }: Props) => {
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
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
