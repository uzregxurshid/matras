import './footer.scss';
import FacebookImg from '../../assets/images/footer/facebook-black.svg';
import TwitterImg from '../../assets/images/footer/twitter-black.svg';
import VimeoImg from '../../assets/images/footer/vimeo-black.svg';
import YouTubeImg from '../../assets/images/footer/youtube-black.svg';
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__left">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Biz haqimizda
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Katalog
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Aksiya
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Manzilimiz
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__right">
            <ul className="footer__social">
              <li className="footer__social--item">
                <a href="/" className="footer__social-link">
                  <img className='footer__social__img' src={FacebookImg} alt="Facebook" />
                </a>
              </li>
              <li className="footer__social--item">
                <a href="/" className="footer__social-link">
                  <img className='footer__social__img' src={TwitterImg} alt="Twitter" />
                </a>
              </li>
              <li className="footer__social--item">
                <a href="/" className="footer__social-link">
                  <img className='footer__social__img' src={VimeoImg} alt="Vimeo" />
                </a>
              </li>
              <li className="footer__social--item">
                <a href="/" className="footer__social-link">
                  <img className='footer__social__img' src={YouTubeImg} alt="Youtube" />
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer