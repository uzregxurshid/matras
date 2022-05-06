import React from 'react'
import './technology.scss';
const Technology = () => {
  return (
    <div className="tech">
      <div className="container">
        <div className="tech__container">

          <h2 className='tech__header'>
            Ishlab chiqarish texnologiyalari
          </h2>

          <ul className='tech__list'>
            <li className='tech__items'>
              <p className='tech__title'>
                Memoriform
              </p>
              <div className="tech__image">
                <img className='tech__img' src="" alt="" />
                <button className='tech__ply' type='button' aria-label='tech play video' aria-hidden="true">
                    <img className='tech__ply--img' src="" alt="" />
                </button>
              </div>
              <p className='tech__desc'>
                
              </p>
            </li>
            <li className='tech__items'>
              <p className='tech__title'>
                Memoriform
              </p>
              <div className="tech__image">
                <img className='tech__img' src="" alt="" />
                <button className='tech__ply' type='button' aria-label='tech play video' aria-hidden="true">
                    <img className='tech__ply--img' src="" alt="" />
                </button>
              </div>
              <p className='tech__desc'>
                
              </p>
            </li>
            <li className='tech__items'>
              <p className='tech__title'>
                Memoriform
              </p>
              <div className="tech__image">
                <img className='tech__img' src="" alt="" />
                <button className='tech__ply' type='button' aria-label='tech play video' aria-hidden="true">
                    <img className='tech__ply--img' src="" alt="" />
                </button>
              </div>
              <p className='tech__desc'>
                
              </p>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Technology