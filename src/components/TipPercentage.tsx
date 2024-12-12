import { Dispatch } from 'react';
import { OrderActions } from '../reducers/orderReducer';

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
  tip: number;
  dispatch: Dispatch<OrderActions>;
}

export const TipPercentage = ({ tip, dispatch }: Props) => {
  return (
    <div>
      <h3 className="font-bold text-2xl border-b-2 border-gray-200 pb-1">
        Tip
      </h3>

      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-1">
            <label htmlFor="">{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) =>
                dispatch({
                  type: 'add-tip',
                  payload: { value: +e.target.value },
                })
              }
              checked={tipOption.value === tip}
              className="cursor-pointer accent-teal-600"
            />
          </div>
        ))}
      </form>
    </div>
  );
};
