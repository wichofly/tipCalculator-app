// import { ChangeEvent } from 'react';
import { OrderItem } from '../types';

const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%',
  },
  {
    id: 'tip-15',
    value: 0.15,
    label: '15%',
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%',
  },
];

interface Props {
  order: OrderItem[];
  setTipPercentage: (tip: number) => void;
}

export const TipPercentage = ({ order, setTipPercentage }: Props) => {
  if (order.length === 0) {
    return null;
  }

  // const handleTipChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   // setTipPercentage(Number(e.target.value));
  //   setTipPercentage(+e.target.value);
  // };

  return (
    <div>
      <h3 className="font-bold text-2xl">Tip:</h3>

      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-1">
            <label htmlFor="">{tip.label}</label>
            <input
              id={tip.id}
              type="radio"
              name="tip"
              value={tip.value}
              onChange={(e) => setTipPercentage(+e.target.value)}
              // onChange={handleTipChange}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
