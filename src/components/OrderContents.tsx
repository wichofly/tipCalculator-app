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
              <p>
                {item.name} x {item.quantity}
              </p>
              <p>${item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
