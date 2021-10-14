import React, { useRef } from "react";
import styles from './Form.module.scss'
import generalStyles from '../App/App.module.scss';
// import { changeCity } from "../../store/actions";



function Form() {
  const locationRef = useRef();

  // const onSubmit = () => {
  //   dispatch(changeCity(locationRef.current.value));
  // }

  return (
    <section className={styles.form}>
      <form action="#" className={styles.form}>
        <ul className={styles.list}>
          <li>
            <label>
              <p>Локация</p>
              <input
                ref={locationRef}
                type="text"
                defaultValue='Москва'
              />
              {/* <span className={generalStyles.error__msg}>Тут ошибка</span> */}
            </label>
          </li>
          <li>
            <label>
              <p>Дата заселения</p>
              <input className={styles.date} type="text" />
              <button type='button'></button>
            </label>
          </li>
          <li>
            <label>
              <p>Количество дней</p>
              <input type="number" />
            </label>
          </li>
        </ul>
        <button
          className={generalStyles.btn}
          type='button'
        >
          Найти
        </button>
      </form>
    </section>
  )
}

export default Form;
