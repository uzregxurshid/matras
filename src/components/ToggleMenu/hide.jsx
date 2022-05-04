import React from 'react'
import toggleclose from '../../assets/images/header/closetoggle.svg';
import './hide.scss';
import Logo from '../../assets/images/header/logo.svg';
import CallIcon from '../../assets/images/header/call.svg';
import Button from '../button/button';
const Toggle = (props) => {
  return (
    <div className='hide'>
      <div className="container">
        <div className="hide__container">
          <div className='hide__header'>
            <div className='hide__header--left'>
              <div className='hide__header--logo'>
                <a href="/">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className='hide__header--right'>
              <div className='hide__header--btnwrap'>
                <button className='hide__header--btn header__main--toggle' type='button' aria-label='togglebutton' aria-hidden="true">
                  <img src={toggleclose} alt="toggle" onClick={props.onToggled}/>
                </button>
              </div>
            </div>
          </div>

          <div className='hide__main'>
            <ul className='hide__list'>
              <li className="hide__items">
                <a className="hide__link" href="/" >Katalog</a>
              </li>
              <li className="hide__items">
                <a className="hide__link" href="/" >Aksiya</a>
              </li>
              <li className="hide__items">
                <a className="hide__link" href="/" >Biz haqimizda</a>
              </li>
              <li className="hide__items">
                <a className="hide__link" href="/" >Manzilimiz</a>
              </li>
              <li className="hide__items">
                <a className="hide__link" href="/" >Aloqa</a>
              </li>
            </ul>

            <div className='hide__order'>
              <Button text={"Buyurtma berish"}/>
            </div>
          </div>

          <div className="hide__call">
            <a className='hide__calllink' href="+998901234567">
              <img className='hide__callimg' src={CallIcon} alt="callicon" />
              +998 90 123 45 67
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toggle