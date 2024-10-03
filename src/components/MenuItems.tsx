import { MenuItem } from '../types';

interface Props {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
}

export const MenuItems = ({ item, addItem }: Props) => {
  return (
    <>
      <button
        className="border-2 border-gray-300 hover:bg-gray-200 w-full p-3 flex justify-between rounded-md"
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-bold">${item.price}</p>
      </button>
    </>
  );
};
