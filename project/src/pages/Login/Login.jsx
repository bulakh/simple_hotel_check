import React, { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import generalStyles from '../../components/App/App.module.scss';
import cn from 'classnames';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import { useDispatch } from 'react-redux';
import { changeEmail } from '../../store/actions';
import { blurHandler, emailHandler, focusHandler, passwordHandler } from '../../hooks/useLoginValid';

function Login() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [emailValid, setEmailValid] = useState({login: '', dirty: false, error: 'Емейл не может быть пустым'});
  const [passwordValid, setPasswordValid] = useState({dirty: false, error:'Пароль не может быть пустым'});
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    localStorage.setItem('email', emailValid.login);
    history.push(AppRoute.MAIN);
    dispatch(changeEmail(emailValid.login));
  }

  useEffect(() => {
    if(emailValid.error || passwordValid.error) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailValid.error, passwordValid.error]);

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
                onChange={(evt) => emailHandler(evt, emailValid, setEmailValid)}
                onBlur={(evt) => blurHandler(evt, emailValid, setEmailValid, passwordValid, setPasswordValid)}
                onFocus={(evt) => focusHandler(evt, emailValid, setEmailValid, passwordValid, setPasswordValid)}
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
                onChange={(evt) => passwordHandler(evt, passwordValid, setPasswordValid)}
                onBlur={(evt) => blurHandler(evt, emailValid, setEmailValid, passwordValid, setPasswordValid)}
                onFocus={(evt) => focusHandler(evt, emailValid, setEmailValid, passwordValid, setPasswordValid)}
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
