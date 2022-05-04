import React from 'react'
import './intro.scss'
import ArrowIcon from '../../assets/images/intro/arrow.svg';
import Button from '../button/button';
const Intro = () => {
  return (
    <div className='intro'>
      <div className="container">
        <div className="intro__container">
          <div className="intro__left">
            <div className="intro__left__title">
              <h1 className='intro__header'>
                Kechalari sokin dam oling
              </h1>
              <Button text={'Kategoriyalar'} img={ArrowIcon}/>
              <div className='intro__progress'>
                  <span className='intro__pro'>
                    
                  </span>
              </div>
            </div>
          </div>
          <div className="intro__right">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro