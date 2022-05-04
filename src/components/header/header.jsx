import React from 'react';
import './header.scss';
import '../../assets/fonts/Raleway/stylesheet.scss';
import '../../assets/fonts/josephin/stylesheet.scss'
import Navbar from '../Navbar/Navbar';
import Logo from '../../assets/images/header/logo.svg';
import CallIcon from '../../assets/images/header/call.svg';
import toggleopen from '../../assets/images/header/toggle.svg';
import Toggle from '../ToggleMenu/hide';
import Button from '../button/button';
const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Navbar />
          <div className='header__main'>
            <div className='header__main--left'>
              <div className='header__logo'>
                <a href="/">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="header__main--right">
              <div className='header__main--phone'>
                <img className='header__main--callicon' src={CallIcon} alt="callIcon" />
                <a className='header__main--calllink' href="tel:+998 90 123 45 67">+998 90 123 45 67</a>
              </div>
              <div className='header__main--order'>
               <Button text={"Buyurtma berish"}/>
                
              
              </div>
            </div>
            <div className='header__main--hidden'>
              <button className='header__main--toggle' type='button' aria-label='togglebutton' aria-hidden="true">
                <img src={toggleopen} alt="toggle" onClick={() => setToggle(!toggle)} />
              </button>
            </div>

            {toggle && <Toggle onToggled={() => setToggle(!toggle)} />}
            
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header