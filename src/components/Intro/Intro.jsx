import React from 'react'
import './intro.scss'
import ArrowIcon from '../../assets/images/intro/arrow.svg';
import Button from '../button/button';
import Matras from '../../assets/images/intro/krovat.png';
const Intro = () => {
  return (
    <div className='intro'>
      <div className="container">
        <div className="intro__container">
          <div className="intro__left">
            <div className="intro__left--title">
              <h1 className='intro__header'>
                Kechalari sokin dam oling
              </h1>
              <Button text={'Kategoriyalar'} img={ArrowIcon}/>
              <div className='intro__progress'>
                  <span className='intro__prog'>
                    <span className='intro__prog--current'></span>
                  </span>
              </div>
            </div>
          </div>
          <div className="intro__right">
              <img className='intro__matras' src={Matras} alt="matras" width={705} height={380}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro