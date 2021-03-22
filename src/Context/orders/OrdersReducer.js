import { GET_ORDERS, CREATE_ORDER } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: payload.orders,
      };
    case CREATE_ORDER:
      return {
        ...state,
        orders: payload.orders,
      };
    default:
      return state;
  }
};
