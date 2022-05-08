import './choose.scss';
import CargoImg from '../../assets/images/choose/go.png';
import SupportImg from '../../assets/images/choose/support.png';
import GuaranteImg from '../../assets/images/choose/guarantee.png';

const Choose = () => {
  return (
    <div className='choose'>
      <div className="container">
        <div className="choose__container">
          <h2 className='choose__header'>
            Nega bizni tanlashadi
          </h2>
          <ul className='choose__list'>
            <li className='choose__item'>
              <div className='choose__item--img'>
                <img src={CargoImg} alt="cargo" />
              </div>
              <div className='choose__item--body'>
                <h3 className='choose__item--header'>
                  Yetkazib berish
                </h3>
                <p className='choose__item--text'>
                  Toshkent bo'ylab bepul o'lchov va etkazib berish
                </p>
              </div>
            </li>
            <li className='choose__item'>
              <div className='choose__item--img'>
                <img src={SupportImg} alt="support" />
              </div>
              <div className='choose__item--body'>
                <h3 className='choose__item--header'>
                  Qo'llab-quvvatlash
                </h3>
                <p className='choose__item--text'>
                  Bizning qo'llab-quvvatlash xizmati sizga har qanday savolda yordam beradi va menejerlarning
                </p>

                <a className='choose__item--tel' href="tel:++998 97 144-24-42">+998 97 144-24-42</a>
              </div>
            </li>
            <li className='choose__item'>
              <div className='choose__item--img'>
                <img src={GuaranteImg} alt="guarantee" />
              </div>
              <div className='choose__item--body'>
                <h3 className='choose__item--header'>
                  Kafolat
                </h3>
                <p className='choose__item--text'>
                  Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras kamida 25 mm qisqartirilsa.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Choose