import './matras.scss';
import Matras from '../../assets/images/products/matras.png';
import ZoomIn from '../../assets/images/products/zoomin.svg';
import Cart from '../../assets/images/products/cart.svg';
import Button from '../button/button';

const Matras = () => {
  return (
    <div className='matras'>
      <div className='matras__container'>
        <div className='matras__left'>
          <div className='matras__badges'>
            <div className='matras__badges--left'>
              <div className="matras__badges--new">
                Yangi mahsulot
              </div>
              <div className="matras__badges--sale">
                Aksiya
              </div>
            </div>
            <div className='matras__badges--right'>
              <button className='matras__badges--zoom' aria-label='zoom in' aria-hidden="true">
                <img src={ZoomIn} alt="zoomin" />
              </button>
            </div>
          </div>
          <div className='matras__img'>
            <img src={Matras} alt="matras" />
          </div>
        </div>
        <div className='matras__right'>
          <h2 className='matras__header'>
            Ortopedik Eko matras
          </h2>
          <ul className='matras__list'>
            <li className='matras__items'>
              <div className='matras__define'>Yuklama</div>
              <div className='matras__info'>150kg</div>
            </li>
            <li className='matras__items'>
              <div className='matras__define'>Kafolat</div>
              <div className='matras__info'>3 yil</div>
            </li>
            <li className='matras__items'>
              <div className='matras__define'>O'lchami</div>
              <div className='matras__info'>200x120x40</div>
            </li>
            <li className='matras__items'>
              <div className='matras__define'>Sig'imi</div>
              <div className='matras__info'>2 kishilik</div>
            </li>
          </ul>

          <div className='matras__fullinfo'>
            Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas.
          </div>

          <div className='matras__price'>
            <div className='matras__price--info'>Narxi</div>
            <div className='matras__price--pricing'>1 699 999 so'm</div>
          </div>

          <Button text={"Buyurtma berish"} img={Cart} alt={"Cart"} />
        </div>
      </div>
    </div>
  )
}

export default Matras