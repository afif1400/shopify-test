import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//
class Landing extends Component {
  render() {
    return (
      <div style={{ height: '75vh' }} className='container valign-wrapper'>
        <div className='row'>
          <div className='col s12 center-align'>
            <h4>
              <b>BigHaat</b>.com dashboard
            </h4>
            <p className='flow-text grey-text text-darken-1'>
              One Stop Agro Store
            </p>
            <br />
            <div className='col s6'>
              <Link
                to='/register'
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  fontWeight: '500',
                  background: '#fcac23',
                }}
                className='btn btn-large waves-effect waves-light hoverable  accent-3'
              >
                Register
              </Link>
            </div>
            <div className='col s6'>
              <Link
                to='/login'
                style={{
                  width: '140px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  background: '#fff',
                  boxShadow: '2px 4px 2px rgba(0,0,0,0.3)',
                }}
                className='btn btn-large waves-effect  hoverable black-text'
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
