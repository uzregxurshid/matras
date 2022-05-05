import './matras.scss';
import Matras from '../../assets/images/products/matras.png';
import ZoomIn from '../../assets/images/products/zoomin.svg';
import Cart from '../../assets/images/products/cart.svg';
import Button from '../button/button';

const Matrass = (props) => {
  
  return (
    <div className='matras'>
      <div className='matras__container'>
        <div className='matras__left'>
          <div className='matras__badges'>
            <div className='matras__badges--left'>
              {
                props.new && (
                  <div className="matras__badges--new">
                    Yangi mahsulot
                  </div>
                )
              }
              {
                props.sale && (
                  <div className="matras__badges--sale" >
                    Aksiya
                  </div>
                )
              }
            </div>
            <div className='matras__badges--right'>
              <button className='matras__badges--zoom' aria-label='zoom in' aria-hidden="true" onClick={props.onZoom}>
                <img src={ZoomIn} alt="zoomin" />
              </button>
            </div>
          </div>
          <div className='matras__header matras__header--hidden'>
            {
              props.header || "Ortopedik Eko matras"
            }
          </div>
          <div className='matras__img'>
            <img src={props.img || Matras} alt="matras" />
          </div>
            <button className='matras__zoomin matras__badges--zoom' aria-label='zoom in' aria-hidden="true" onClick={props.onZoom}>
                <img src={ZoomIn} alt="zoomin" />
            </button>

        </div>
        <div className='matras__right'>
          <h2 className='matras__header'>
            {
              props.header || "Ortopedik Eko matras"
            }
          </h2>
          <ul className='matras__list'>
            <li className='matras__items'>
              <div className='matras__define'>Yuklama</div>
              <div className='matras__info'>{props.load || "150 kg"}</div>
            </li>
            <li className='matras__items'>
              <div className='matras__define'>Kafolat</div>
              <div className='matras__info'>{props.guarante || "3 yil"}</div>
            </li>
            <li className='matras__items'>
              <div className='matras__define'>O'lchami</div>
              <div className='matras__info'>{props.size || "200x120x40"}</div>
            </li>
            <li className='matras__items'>
              <div className='matras__define'>Sig'imi</div>
              <div className='matras__info'>{props.capacity || "2 kishilik"}</div>
            </li>
          </ul>

          <div className='matras__fullinfo'>
            {
              props.fullinfo || "Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas."
            }
          </div>

          <div className='matras__price'>
            <div className='matras__price--info'>Narxi</div>
            <div className='matras__price--flex'>
              {
                props.sale && (
                  <div className='matras__price--old'>
                    {props.old}
                  </div>
                )
              }
              <div className='matras__price--pricing'>{props.price || "1 699 999 so'm"}</div>
            </div>
          </div>

          <Button text={"Buyurtma berish"} img={Cart} alt={"Cart"} onClick={props.onOrder} />
        </div>
      </div>
    </div>
  )
}

export default Matrass