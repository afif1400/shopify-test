import React, { useReducer } from 'react';
import axios from 'axios';
import OrdersContext from './OrdersContext';
import OrdersReducer from './OrdersReducer';
import { GET_ORDERS } from '../types';

const OrdersState = (props) => {
  let initialState = {
    orders: [],
  };

  const [state, dispatch] = useReducer(OrdersReducer, initialState);

  const getOrders = async () => {
    try {
      let res = await axios.get('http://localhost:7000/orderlist');
      let { data } = res;

      dispatch({ type: GET_ORDERS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        orders: state.orders,
        getOrders,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
