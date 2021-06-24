import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title = 'ToDo' }) => {
  return (
    <nav className='navbar p-1'>
      <div className='left-navbar text-xl'>
        <div className='p-1'>
          <i className='fa fa-book'></i>
        </div>
        <div className='p-1'>{title}</div>
      </div>
      <div className='right-navbar menu-container m-1'>
        <i className='fa fa-bars menu-btn text-l' />
        <ul className='menu m-1 text-reg'>
          <li className='menu-list p-1'>
            <Link to='/'>Home</Link>
          </li>
          <li className='menu-list p-1'>
            <Link to='/about'>About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: 'Todo',
};

export default Navbar;
