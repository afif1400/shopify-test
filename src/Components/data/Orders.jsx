import React from 'react';
import './orders.css';

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [],
    };
  }

  render() {
    return (
      <div
        className='ordersBx'
        style={{
          padding: '50px',
        }}
      >
        <h4>orders List</h4>
        <table className='responsive-table striped'>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Created</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>12-4-20</td>
              <td>afif</td>
              <td>item list</td>
              <td>complete</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>12-4-20</td>
              <td>afif</td>
              <td>item list</td>
              <td>complete</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>12-4-20</td>
              <td>afif</td>
              <td>item list</td>
              <td>complete</td>
              <td>1000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
