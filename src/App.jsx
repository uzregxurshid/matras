import React from 'react';
import './header.scss';
import './assets/fonts/Raleway/stylesheet.scss';
import './nav.scss';
const App = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
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
        </div>
      </div>
    </header >
  )
}

export default App