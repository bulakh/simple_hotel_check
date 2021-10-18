import React, { useEffect, useRef, useState } from 'react';
import styles from './Login.module.scss';
import generalStyles from '../App/App.module.scss';
import cn from 'classnames';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import { useDispatch } from 'react-redux';
import { changeEmail } from '../../store/actions';

function Login() {
  const history = useHistory();

  const dispatch = useDispatch();

  const emailRef = useRef();

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState('Емейл не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    localStorage.setItem('email', emailRef.current.value);
    history.push(AppRoute.MAIN);
    dispatch(changeEmail(emailRef.current.value));
  }

  useEffect(() => {
    if(emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (evt) => {
    switch(evt.target.name) {
      case 'email':
        setEmailDirty(true);
        break
      case 'password':
        setPasswordDirty(true);
        break
      default:
    }
  };

  const focusHandler = (evt) => {
    switch(evt.target.name) {
      case 'email':
        setEmailDirty(false);
        break
      case 'password':
        setPasswordDirty(false);
        break
      default:
    }
  };

  const emailHandler = (evt) => {

    const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(evt.target.value).toLowerCase())) {
      setEmailError('Некорректный емейл');
      if (!evt.target.value) {
        setEmailError('Емейл не может быть пустым');
      }
    } else {
      setEmailError('');
      }
  };

  const passwordHandler = (evt) => {
    if (evt.target.value.length < 8) {
      setPasswordError('Пароль должен быть длиннее 8 символов');
      if (!evt.target.value) {
        setPasswordError('Пароль не может быть пустым');
      }
    } else if (evt.target.value.match(/[а-яА-ЯЁё]/ig) !== null) {
        setPasswordError('Не используйте кириллицу');
      } else {
          setPasswordError('');
        }
  };

  return (
    <div className={cn(generalStyles.page, styles.wrap)}>
      <h1 className={generalStyles.hidden}>Вход в Simple Hotel Check</h1>
      <form action='' className={styles.form} onSubmit={handleSubmit}>
        <h2>Simple Hotel Check</h2>
        <ul className={styles.list}>
          <li>
            <label
              className={(emailDirty && emailError) ? generalStyles.error__label : ''}
            >
              <p>Логин</p>
              <input
                onChange={emailHandler}
                onBlur={blurHandler}
                onFocus={focusHandler}
                name='email'
                ref={emailRef}
                type='email'
                autoComplete='email'
                className={generalStyles.input}
              />
              {(emailDirty && emailError) &&
                <span className={generalStyles.error__msg}>
                  {emailError}
                </span>}
            </label>
          </li>
          <li>
            <label
              className={(passwordDirty && passwordError) ? generalStyles.error__label : ''}
            >
              <p>Пароль</p>
              <input
                onChange={passwordHandler}
                onBlur={blurHandler}
                onFocus={focusHandler}
                name='password'
                type='password'
                className={generalStyles.input}
                autoComplete='password'
              />
              {(passwordDirty && passwordError) &&
                <span className={generalStyles.error__msg}>
                  {passwordError}
                </span>}
            </label>
          </li>
        </ul>
        <button
          className={generalStyles.btn}
          type='submit'
          disabled={!formValid}
        >
          Войти
        </button>
      </form>
    </div>
  )
}

export default Login;
