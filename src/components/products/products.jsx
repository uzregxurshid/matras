import './products.scss';

import '../../assets/fonts/opensans/stylesheet.scss';
import Matras from '../matras/matras';
import RedMatras from '../../assets/images/products/redmatras.png'
const Products = () => {
  return (
    <div className="pro">
      <div className="container">
        <div className="pro__container">
          <h2 className='pro__header'>Bizning mahsulotlar</h2>
          <ul className="pro__list">
            <li className="pro__items"><button className="pro__btn pro__btn--active">Barchasi</button></li>
            <li className="pro__items"><button className="pro__btn pro__btn--hover">Model A+</button></li>
            <li className="pro__items"><button className="pro__btn">Model B+</button></li>
            <li className="pro__items"><button className="pro__btn">Model C</button></li>
            <li className="pro__items"><button className="pro__btn">Model C+</button></li>
            <li className="pro__items"><button className="pro__btn">Model D</button></li>
            <li className="pro__items"><button className="pro__btn">Model Yevro</button></li>
            <li className="pro__items"><button className="pro__btn">Yangi tovarlar</button></li>
            <li className="pro__items"><button className="pro__btn">Model A</button></li>
          </ul>
          <hr className="pro__hr" />
          <div className='pro__main'>

            <ul className='pro__bazar'>
              <li className='pro__products'>
                <Matras new={true} />
              </li>
              <li className="pro__products">
                <Matras new={true} />
              </li>
              <li className="pro__products">
                <Matras new={true} />
              </li>
              <li className="pro__products">
                <Matras new={true} sale={true} img={RedMatras} old={"1 699 999 so'm"} />
              </li>
            </ul>

            <div className='pro__bigsale'>
              <h2 className='pro__header pro__header--bigsale'>
                Aksiyadagi mahsulotlar
              </h2>

              <ul className='pro__bazar'>
              <li className='pro__products'>
                <Matras sale={true} old={"1 699 999 so'm"} />
              </li>
              <li className="pro__products">
                <Matras new={true} sale={true} img={RedMatras} old={"1 699 999 so'm"} />
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products