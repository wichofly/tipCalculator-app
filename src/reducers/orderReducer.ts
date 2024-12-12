import { MenuItem, OrderItem } from '../types';

export interface OrderState {
  order: OrderItem[];
  tip: number;
}

export interface OrderActions {
  type: 'add-order' | 'remove-order' | 'place-order' | 'add-tip';
  payload?: { item?: MenuItem } | { id?: MenuItem['id'] } | { value?: number };
}

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  if (action.type === 'add-order') {
    const { item } = action.payload as { item: MenuItem };

    const itemExist = state.order.find((orderItem) => orderItem.id === item.id);

    let updatedOrder: OrderItem[] = [];

    if (itemExist) {
      updatedOrder = state.order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      updatedOrder = [...state.order, newItem];
    }
    return {
      ...state,
      order: updatedOrder,
    };
  }

  if (action.type === 'remove-order') {
    const { id } = action.payload as { id: MenuItem['id'] };

    const removeOrder = state.order.filter((orderItem) => orderItem.id !== id);

    return {
      ...state,
      order: removeOrder,
    };
  }

  if (action.type === 'place-order') {
    return {
      ...state,
    };
  }

  if (action.type === 'add-tip') {
    const { value } = action.payload as { value: number };

    return {
      ...state,
      tip: value,
    };
  }

  return state;
};
