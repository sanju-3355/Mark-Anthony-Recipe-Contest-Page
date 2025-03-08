import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3-qC1IeABdiG534_rO1LE2BdSxu-Gm_lAw&s' className='logo' alt='food' />
      <h1 className="title">Recipe Contest</h1>
    </header>
  );
};

export default Header;
