import './stat.scss';
const Stat = () => {
  return (
    <div className="stat">
      <div className="stat__container">
        <div className="container">
          <ul className="stat__list">
            <li className="stat__item">
              <h2 className="stat__header">
                7
              </h2>
              <p className="stat__desc">
                yillik tajriba
              </p>
            </li>
            <li className="stat__item">
              <h2 className="stat__header">
                10k+
              </h2>
              <p className="stat__desc">
                mamnun mijozlar
              </p>
            </li>
            <li className="stat__item">
              <h2 className="stat__header">
                10
              </h2>
              <p className="stat__desc">
                yillik kafolat
              </p>
            </li>
            <li className="stat__item">
              <h2 className="stat__header">
                3
              </h2>
              <p className="stat__desc">
                kunda yetkazish
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Stat