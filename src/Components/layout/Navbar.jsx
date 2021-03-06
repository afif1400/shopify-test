import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
class Navbar extends Component {
  render() {
    return (
      <div className='navbar-fixed' style={{ height: '100px' }}>
        <nav className='z-depth-0'>
          <div className='nav-wrapper white'>
            <Link
              to='/'
              style={{
                fontFamily: 'monospace',
              }}
              className='col s5 brand-logo center '
            >
              <img src={logo} alt='bighaat logo' />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
