import { formatCurrency } from '../helpers';
import { OrderItem } from '../types';

interface Props {
  order: OrderItem[];
}

export const OrderContents = ({ order }: Props) => {
  return (
    <div>
      <h2 className="font-bold text-4xl">Consume</h2>

      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center">Empty order</p>
        ) : (
          order.map((item) => (
            <div key={item.id}>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-bold">
                Quantity: {item.quantity} -{' '}
                {formatCurrency(item.price * item.quantity)}
              </p>

              <button>X</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
