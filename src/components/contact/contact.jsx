import './contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__container">
          <div className="contact__left">
            <h3 className='contact__header'>
              Sizni qiziqtirdimi?
            </h3>
            <p className='contact__desc'>
              Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz
            </p>
          </div>
          <div className="contact__right">
            <form className='contact__form'>
              <div className="contact__inputting">
                <span className='contact__input--before'>+998 |</span>
                <input className='contact__input' type="tel" name="phone" id="phone" placeholder='Raqamingizni yozing'/>
              </div>
              <button className='contact__submit' type='submit'>
                Yuborish
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact