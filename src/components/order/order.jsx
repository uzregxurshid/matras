import './order.scss';

const Order = () => {
  return (
    <div className="order">
      <div className="order__container">
        <h2 className="order__title"> Buyurtma qilish </h2>
        <form className="order__form">
          <div className="order__div">

            <input className="order__input" type="text" id="name" />
          </div>
          <div className="order__div">
            <div className="order__phone">
              <p className="order__phone--before">
                +998
              </p>
              <input className="order__input" type="text" id="phone" placeholder="Raqamingizni yozing" />
            </div>
          </div>

          <div className="order__div">
            <label className="order__label" htmlFor="select">
              Mahsulotlarni toifasini tanlang
            </label>
            <select className="order__select" id="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="order__counter">
            {/* label for count */}
            <label className="order__label" htmlFor="count">
              Miqdorni tanlang
            </label>
            <div className="order__count">
              <button className="order__count--btn" type="button">
                -
              </button>
              <input className="order__input" type="text" id="count" value="1" />
              <button className="order__count--btn" type="button">
                +
              </button>
              </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Order