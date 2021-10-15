import React, { useRef } from "react";
import styles from './Form.module.scss'
import generalStyles from '../App/App.module.scss';
import { changeCity, changeDate, changeDayCount } from "../../store/actions";
import { useDispatch } from "react-redux";
import { parsedDate } from '../../utils.js';




function Form() {
  const locationRef = useRef();
  const dateRef = useRef();
  const dayCountRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(changeCity(locationRef.current.value));
    const correctDate = parsedDate(dateRef.current.value);
    dispatch(changeDate(correctDate));
    dispatch(changeDayCount(dayCountRef.current.value));
  }

  return (
    <section className={styles.form}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
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
              <input
                ref={dateRef}
                className={styles.date}
                type="text"
                defaultValue={new Date().toLocaleDateString()}
              />
              <button type='button'></button>
            </label>
          </li>
          <li>
            <label>
              <p>Количество дней</p>
              <input
                ref={dayCountRef}
                type="number"
                defaultValue='1'
              />
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
