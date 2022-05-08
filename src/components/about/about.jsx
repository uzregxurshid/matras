import './about.scss';
import VideoImg from '../../assets/images/about/image1.png';
import OfficeImg from '../../assets/images/about/image2.png';
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__container">
          <ul className='about__list'>
            <li className='about__items'>
              <div className='about__items--left'>
                <h2 className='about__items--head'>
                  Dream Cloud kompaniyasi haqida
                </h2>
                <p className='about__items--text'>
                  Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum:
                </p>
                <ul className='about__desclist'>
                  <li className='about__desclist--item'>
                    Penatibus viverra gravida rhoncus in.
                  </li>
                  <li className='about__desclist--item'>
                    Dolor integer in interdum viverra risus dolor enim.
                  </li>
                  <li className='about__desclist--item'>
                    Turpis senectus eu, eget aenean nulla pellentesque sed ut tempor.
                  </li>
                </ul>
              </div>
              <div className='about__items--right'>
                <div className='about__items--video'>
                  <img className='about__items--image' src={VideoImg} alt="Matras" />
                </div>
              </div>
            </li>
            <li className='about__items'>
              <div className='about__items--left'>
                <p className='about__items--text'>
                  Libero erat praesent ullamcorper eget tortor sed et. Nec id lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer sed vulputate sed nec. Arcu id mattis erat et id.
                </p>
                <ol className='about__desclist'>
                  <li className='about__desclist--item'>
                    Id risus phasellus laoreet eget. A nec pulvinar.
                  </li>
                  <li className='about__desclist--item'>
                    Eu justo, tincidunt fringilla diam nulla.
                  </li>
                  <li className='about__desclist--item'>
                    Amet, nullam cras lacus, fermentum leo tellus sagittis.
                  </li>
                  <li className='about__desclist--item'>
                    Facilisi mauris condimentum sagittis odio rhoncus semper.
                  </li>
                </ol>
                <p className='about__items--end'>
                  Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus accumsan est elementum feugiat arcu mauris tincidunt. Eget faucibus pharetra et luctus eget ut fames. A cursus elementum egestas eu scelerisque id.
                </p>
              </div>
              <div className='about__items--right'>
                <img className='about__items--image' src={OfficeImg} alt="Matras" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About