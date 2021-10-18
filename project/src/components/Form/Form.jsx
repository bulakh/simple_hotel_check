import React, { useRef,useState, useEffect } from 'react';
import styles from './Form.module.scss';
import generalStyles from '../App/App.module.scss';
import { changeCity, changeDate, changeDayCount, fetchHotels } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { parsedDate } from '../../utils.js';
import NumberFormat from 'react-number-format';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




function Form() {
  const dispatch = useDispatch();

  const locationRef = useRef();
  const dateRef = useRef();
  const dayCountRef = useRef();

  const [startDate, setStartDate] = useState(new Date());

  const [locationDirty, setLocationDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);
  const [countDirty, setCountDirty] = useState(false);


  const [locationError, setLocationError] = useState('');
  const [dateError, setDateError] = useState('');
  const [countError, setCountError] = useState('');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if(locationError || dateError || countError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }

  }, [locationError, dateError, countError]);

  const submitHandler = (evt) => {
    evt.preventDefault();

    dispatch(changeCity(locationRef.current.value));
    const correctDate = parsedDate(dateRef.current.state.value);
    dispatch(changeDate(correctDate));
    dispatch(changeDayCount(dayCountRef.current.state.value));
    dispatch(fetchHotels());
  }

  const blurHandler = (evt) => {
    switch(evt.target.name) {
      case 'location':
        setLocationDirty(true);
        break
      case 'date':
        setDateDirty(true);
        break
      case 'count':
        setCountDirty(true);
        break
      default:
    }
  }

  const focusHandler = (evt) => {
    switch(evt.target.name) {
      case 'location':
        setLocationDirty(false);
        break
      case 'date':
        setDateDirty(false);
        break
      case 'count':
        setCountDirty(false);
        break
      default:
    }
  }

  const locationHandler = (evt) => {
    if (!evt.target.value) {
      setLocationError('Введите город');
    } else {
      setLocationError('');
    }
  }


  const dateHandler = (evt) => {
    if (parsedDate(evt.target.value).toString() === 'Invalid Date') {
      setDateError('Введите корректную дату');
      if (!evt.target.value) {
        setDateError('Дата должна быть');
      }
    } else {
      setDateError('');
      setStartDate(parsedDate(evt.target.value));
    }
  }

  const daysCountHandler = (evt) => {
    if (!evt.target.value || Number(evt.target.value) === 0) {
      setCountError('Насколько дней?');
    } else {
      setCountError('');
    }
  }

  const datePickerHandler = (date) => {
    setStartDate(date);
    dateRef.current.state.numAsString = date.toLocaleDateString().split('.').join('');
  }

  return (
    <section className={styles.form}>
      <form action='' className={styles.form} onSubmit={submitHandler}>
        <ul className={styles.list}>
          <li>
            <label
              className={(locationDirty && locationError) ? generalStyles.error__label : ''}
            >
              <p>Локация</p>
              <input
                onBlur={blurHandler}
                onFocus={focusHandler}
                onChange={locationHandler}
                ref={locationRef}
                className={generalStyles.input}
                type='text'
                defaultValue='Москва'
                name='location'
              />
              {(locationDirty && locationError) &&
                <span className={generalStyles.error__msg}>
                  {locationError}
                </span>}
            </label>
          </li>
          <li>
            <label
              className={(dateDirty && dateError) ? generalStyles.error__label : ''}
            >
              <p>Дата заселения</p>
              <NumberFormat
                onBlur={blurHandler}
                onFocus={focusHandler}
                onChange={dateHandler}
                ref={dateRef}
                className={generalStyles.input}
                name='date'
                format='##.##.####'
                mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                defaultValue={startDate.toLocaleDateString()}
              />
              <div className={styles.datepicker__wrap}>
                <DatePicker
                    onChange={(date) => datePickerHandler(date)}
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
              {(dateDirty && dateError) &&
                <span className={generalStyles.error__msg}>
                  {dateError}
                </span>}
            </label>
          </li>
          <li>
            <label
              className={(countDirty && countError) ? generalStyles.error__label : ''}
            >
              <p>Количество дней</p>
              <NumberFormat
                onBlur={blurHandler}
                onFocus={focusHandler}
                onChange={daysCountHandler}
                ref={dayCountRef}
                name='count'
                maxLength='3'
                defaultValue='1'
                className={generalStyles.input}
              />
              {(countDirty && countError) &&
                <span className={generalStyles.error__msg}>
                  {countError}
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
