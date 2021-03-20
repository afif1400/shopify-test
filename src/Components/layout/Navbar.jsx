import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  useEffect(() => {
    window.onscroll = function () {
      growShrinkLogo();
    };

    function growShrinkLogo() {
      var Logo = document.getElementById('LogoNav');
      var Nav = document.querySelector('.nav-wrapper');
      var NavOuter = document.querySelector('.outer-nav');

      if (
        document.body.scrollTop > 5 ||
        document.documentElement.scrollTop > 5
      ) {
        Logo.style.width = '140px';
        Nav.style.height = '60px';
        NavOuter.style.height = '60px';
      } else {
        Logo.style.width = '220px';
        Nav.style.height = '80px';
        NavOuter.style.height = '80px';
      }
    }
  });
  return (
    <div className='navbar-fixed' style={{ height: '60px' }}>
      <nav
        className='z-depth-2 outer-nav'
        style={{ height: '80px', transition: '0.4s' }}
      >
        <div
          className='nav-wrapper white'
          style={{ height: '80px', transition: '0.4s' }}
        >
          <Link
            to='/'
            style={{
              fontFamily: 'monospace',
              transition: '0.6s',
            }}
            className='col s5 brand-logo center '
          >
            <img
              style={{ transition: '0.4s', width: '180px' }}
              src={logo}
              id='LogoNav'
              alt='bighaat logo'
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
