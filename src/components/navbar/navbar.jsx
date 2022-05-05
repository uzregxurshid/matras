import React from 'react'
import './nav.scss';
const Navbar = () => {
  return (
    <nav className='header__nav nav'>
      <ul className='nav__list'>
        <li className="nav__items">
          <a className="nav__link" href="/" >Katalog</a>
        </li>
        <li className="nav__items">
          <a className="nav__link" href="/" >Aksiya</a>
        </li>
        <li className="nav__items">
          <a className="nav__link" href="/" >Biz haqimizda</a>
        </li>
        <li className="nav__items">
          <a className="nav__link" href="/" >Manzilimiz</a>
        </li>
        <li className="nav__items">
          <a className="nav__link" href="/" >Aloqa</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar