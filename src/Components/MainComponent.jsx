import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Register from './auth/Signup';
import Login from './auth/Login';
import Orders from './data/Orders';

const MainComponent = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div style={{ paddingTop: '20px' }}>
          <Route exact path='/' component={Landing} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/orders' component={Orders} />
        </div>
      </div>
    </Router>
  );
};
export default MainComponent;
