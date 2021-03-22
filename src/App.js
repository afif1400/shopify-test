import MainComponent from './Components/MainComponent';
import OrdersState from './Context/orders/OrdersState';

function App() {
  return (
    <div className='App'>
      <OrdersState>
        <MainComponent />
      </OrdersState>
    </div>
  );
}

export default App;
