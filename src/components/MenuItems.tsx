import { Dispatch } from 'react';
import { MenuItem } from '../types';
import { OrderActions } from '../reducers/orderReducer';

interface Props {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
}

export const MenuItems = ({ item, dispatch }: Props) => {
  return (
    <>
      <button
        className="border-2 border-gray-300 hover:bg-gray-200 w-full p-3 flex justify-between rounded-md"
        onClick={() => dispatch({ type: 'add-order', payload: { item } })}
      >
        <p>{item.name}</p>
        <p className="font-bold">${item.price}</p>
      </button>
    </>
  );
};
