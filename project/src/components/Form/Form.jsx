import React, { useRef,useState, useEffect } from 'react';
import styles from './Form.module.scss';
import generalStyles from '../App/App.module.scss';
import { changeCity, changeDate, changeDayCount, fetchHotels } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { parsedDate } from '../../utils.js';
import NumberFormat from 'react-number-format';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { blurHandler, focusHandler, locationHandler, dateHandler, daysCountHandler, datePickerHandler } from '../../hooks/useFormValid';


function Form() {
  const dispatch = useDispatch();

  const dateRef = useRef();

  const [startDate, setStartDate] = useState(new Date());

  const [location, setLocation] = useState({name: 'Москва', dirty: false, error: ''});
  const [date, setDate] = useState({selected: '', dirty: false, error: ''});
  const [count, setCount] = useState({current: '1', dirty: false, error: ''});

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if(location.error || date.error || count.error) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }

  }, [location.error, date.error, count.error]);

  const submitHandler = (evt) => {
    evt.preventDefault();

    dispatch(changeCity(location.name));
    const correctDate = parsedDate(dateRef.current.state.value);
    dispatch(changeDate(correctDate));
    dispatch(changeDayCount(count.current));
    dispatch(fetchHotels());
  }

  return (
    <section className={styles.form}>
      <form action='' className={styles.form} onSubmit={submitHandler}>
        <ul className={styles.list}>
          <li>
            <label
              className={(location.dirty && location.error) ? generalStyles.error__label : ''}
            >
              <p>Локация</p>
              <input
                onBlur={(evt) => blurHandler(
                  evt,
                  location,
                  setLocation,
                  date,
                  setDate,
                  count,
                  setCount)}
                onFocus={(evt) => focusHandler(
                  evt,
                  location,
                  setLocation,
                  date,
                  setDate,
                  count,
                  setCount)}
                onChange={(evt) => locationHandler(evt, location, setLocation)}
                className={generalStyles.input}
                type='text'
                defaultValue='Москва'
                name='location'
              />
              {(location.dirty && location.error) &&
                <span className={generalStyles.error__msg}>
                  {location.error}
                </span>}
            </label>
          </li>
          <li>
            <label
              className={(date.dirty && date.error) ? generalStyles.error__label : ''}
            >
              <p>Дата заселения</p>
              <NumberFormat
                onBlur={(evt) => blurHandler(
                  evt,
                  location,
                  setLocation,
                  date,
                  setDate,
                  count,
                  setCount)}
                onFocus={(evt) => focusHandler(
                  evt,
                  location,
                  setLocation,
                  date,
                  setDate,
                  count,
                  setCount)}
                onChange={(evt) => dateHandler(evt, date, setDate, setStartDate)}
                ref={dateRef}
                className={generalStyles.input}
                name='date'
                format='##.##.####'
                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                defaultValue={startDate.toLocaleDateString()}
              />
              <div className={styles.datepicker__wrap}>
                <DatePicker
                    onChange={(date) => datePickerHandler(date, setStartDate, dateRef)}
                    selected={startDate}
                    preventOpenOnFocus={true}
                    customInput={
                      <button
                        type='button'
                        className={styles.button__date}
                      >
                      </button>
                    }
                />
              </div>
              {(date.dirty && date.error) &&
                <span className={generalStyles.error__msg}>
                  {date.error}
                </span>}
            </label>
          </li>
          <li>
            <label
              className={(count.dirty && count.error) ? generalStyles.error__label : ''}
            >
              <p>Количество дней</p>
              <NumberFormat
                onBlur={(evt) => blurHandler(evt, location, setLocation, date, setDate, count, setCount)}
                onFocus={(evt) => focusHandler(evt, location, setLocation, date, setDate, count, setCount)}
                onChange={(evt) => daysCountHandler(evt, count, setCount)}
                name='count'
                maxLength='3'
                defaultValue='1'
                className={generalStyles.input}
              />
              {(count.dirty && count.error) &&
                <span className={generalStyles.error__msg}>
                  {count.error}
                </span>}
            </label>
          </li>
        </ul>
        <button
          className={generalStyles.btn}
          type='submit'
          disabled={!formValid}
        >
          Найти
        </button>
      </form>
    </section>
  )
}

export default Form;
