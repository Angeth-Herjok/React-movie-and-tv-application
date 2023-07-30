import React from 'react';
import'./style.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Moovie</a>
        </li>
        <button className="search-button">Search</button>
        <li>
          <a href="/products">Home</a>
        </li>
        <li>
          <a href="/signIn">My list</a>
        </li>
        <button className='login-button'>Sign In</button>
      </ul>
    </nav>
  );
};
export default Navigation;
