import { MenuItem } from '../types';

interface Props {
  item: MenuItem;
}

export const MenuItems = ({ item }: Props) => {
  return (
    <>
      <button className="border-2 border-gray-300 hover:bg-gray-200 w-full p-3 flex justify-between">
        <p>{item.name}</p>
        <p className="font-bold">${item.price}</p>
      </button>
    </>
  );
};
