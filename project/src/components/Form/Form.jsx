import React from "react";
import styles from './Form.module.scss'
import generalStyles from '../App/App.module.scss';

function Form() {
  return (
    <section className={styles.form}>
      <form action="#" className={styles.form}>
        <ul className={styles.list}>
          <li>
            <label>
              <p>Локация</p>
              <input type="text" />
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
              <input type="text" />
            </label>
          </li>
        </ul>
        <button
          className={generalStyles.btn}
          type='button'
        >
          Войти
        </button>
      </form>
    </section>
  )
}

export default Form;
