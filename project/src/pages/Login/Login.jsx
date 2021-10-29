import React, { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import generalStyles from '../../components/App/App.module.scss';
import cn from 'classnames';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import { useDispatch } from 'react-redux';
import { changeEmail } from '../../store/actions';

function Login() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [emailValid, setEmailValid] = useState({dirty: false, error: 'Емейл не может быть пустым'});
  const [passwordValid, setPasswordValid] = useState({dirty: false, error:'Пароль не может быть пустым'});
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    localStorage.setItem('email', evt.target.value);
    history.push(AppRoute.MAIN);
    dispatch(changeEmail(evt.target.value));
  }

  useEffect(() => {
    if(emailValid.error || passwordValid.error) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailValid.error, passwordValid.error]);

  const blurHandler = (evt) => {
    switch(evt.target.name) {
      case 'email':
        setEmailValid({...emailValid, dirty: true});
        break
      case 'password':
        setPasswordValid({...passwordValid, dirty: true});
        break
      default:
    }
  };

  const focusHandler = (evt) => {
    switch(evt.target.name) {
      case 'email':
        setEmailValid({...emailValid, dirty: false});
        break
      case 'password':
        setPasswordValid({...passwordValid, dirty: false});
        break
      default:
    }
  };

  const emailHandler = (evt) => {

    const re = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(evt.target.value).toLowerCase())) {
      setEmailValid({...emailValid, error: 'Некорректный емейл'});
      if (!evt.target.value) {
        setEmailValid({...emailValid, error: 'Емейл не может быть пустым'});
      }
    } else {
      setEmailValid({...emailValid, error: ''});
      }
  };

  const passwordHandler = (evt) => {
    if (evt.target.value.length < 8) {
      setPasswordValid({...passwordValid, error: 'Пароль должен быть длиннее 8 символов'});
      if (!evt.target.value) {
        setPasswordValid({...passwordValid, error: 'Пароль не может быть пустым'});
      }
    } else if (evt.target.value.match(/[а-яА-ЯЁё]/ig) !== null) {
        setPasswordValid({...passwordValid, error: 'Не используйте кириллицу'});
      } else {
          setPasswordValid({...passwordValid, error: ''});
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
              className={(emailValid.dirty && emailValid.error) ? generalStyles.error__label : ''}
            >
              <p>Логин</p>
              <input
                onChange={emailHandler}
                onBlur={blurHandler}
                onFocus={focusHandler}
                name='email'
                type='email'
                autoComplete='email'
                className={generalStyles.input}
              />
              {(emailValid.dirty && emailValid.error) &&
                <span className={generalStyles.error__msg}>
                  {emailValid.error}
                </span>}
            </label>
          </li>
          <li>
            <label
              className={(passwordValid.dirty && passwordValid.error) ? generalStyles.error__label : ''}
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
              {(passwordValid.dirty && passwordValid.error) &&
                <span className={generalStyles.error__msg}>
                  {passwordValid.error}
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
