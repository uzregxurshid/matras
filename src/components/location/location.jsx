import './location.scss';
import LocImg from '../../assets/images/loc/loc.svg';
import Button from '../button/button';
import LocCover from '../../assets/images/loc/locPng.png';
const Location = () => {
  return (
    <div className="location">
      <div className="container">
        <div className="location__container">
          <div className="location__left">
            <h2 className="location__header">
              Manzilimiz
            </h2>
            <img className='location__img--hidden' src={LocCover} alt="Location" width={525} height={321} />

            <div className='location__body'>
              <p className='location__loc'>
                Toshkent, Parkent ko'chasi, 176-uy
              </p>
              <p className='location__def'>
                Mo'ljal: Qoraqamish 2/1, Tursunxodjayeva ro'parasi, Milliy bog' metro bekati.
              </p>
              <Button text={"Geolokatsiya"} img={LocImg} class={"location__btn"} classimg={"location__bimg"} />
            </div>
          </div>
          <div className="location__right">
            <img className='location__img' src={LocCover} alt="Location" width={525} height={321} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location