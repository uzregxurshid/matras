import React from 'react'
import './technology.scss';
import LatexImg from '../../assets/images/tech/latex.png';
import MemorImg from '../../assets/images/tech/memoriforum.png';
import PrujiImg from '../../assets/images/tech/prujina.png';
import PlayImg from '../../assets/images/tech/playbtn.svg';
const Technology = () => {
  const handleNext = (el, num) => {
    document.querySelector('.tech__next--active').classList.remove('tech__next--active');
    el.currentTarget.classList.add('tech__next--active');
    document.querySelector('.tech__items--active').classList.remove('tech__items--active');
    document.querySelectorAll('.tech__items')[num - 1].classList.add('tech__items--active');
  }

  return (
    <div className="tech">
      <div className="container">
        <div className="tech__container">

          <h2 className='tech__header'>
            Ishlab chiqarish texnologiyalari
          </h2>

          <ul className='tech__list'>
            <li className='tech__items tech__items--active'>
              <p className='tech__title'>
                Memoriform
              </p>
              <div className="tech__image">
                <img className='tech__img' src={MemorImg} alt="Memoriform" />
                <button className='tech__ply' type='button' aria-label='tech play video' aria-hidden="true">
                  <img className='tech__ply--img' width={407} height={300} src={PlayImg} alt="" />
                </button>
              </div>
              <p className='tech__desc'>
                Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
              </p>
            </li>
            <li className='tech__items'>
              <p className='tech__title'>
                Tabiiy lateks
              </p>
              <div className="tech__image">
                <img className='tech__img' src={LatexImg} alt="Tabiiy lateks" />
                <button className='tech__ply' type='button' aria-label='tech play video' aria-hidden="true">
                  <img className='tech__ply--img' width={407} height={300} src={PlayImg} alt="" />
                </button>
              </div>
              <p className='tech__desc'>
                Aliquam euismod ornare justo, sed faucibus eu. Sed amet tellus netus quis bibendum. Euismod diam eu sem tristique aenean rhoncus.
              </p>
            </li>
            <li className='tech__items'>
              <p className='tech__title'>
                Mustaqil prujina
              </p>
              <div className="tech__image">
                <img className='tech__img' src={PrujiImg} alt="Mustaqil prujina" />
                <button className='tech__ply' type='button' aria-label='tech play video' aria-hidden="true">
                  <img className='tech__ply--img' width={407} height={300} src={PlayImg} alt="" />
                </button>
              </div>
              <p className='tech__desc'>
                Enim urna consequat, justo, cras tincidunt imperdiet orci sodales. Dui purus feugiat morbi quam orci, vel. Elementum tincidunt blandit ultricies venenatis rhoncus.
              </p>
            </li>
          </ul>

          <ul className='tech__next'>
            <li className='tech__next--items tech__next--active' onClick={(e) => handleNext(e, 1)}>
            </li>
            <li className='tech__next--items' onClick={(e) => handleNext(e, 2)}>
            </li>
            <li className='tech__next--items' onClick={(e) => handleNext(e, 3)}>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Technology