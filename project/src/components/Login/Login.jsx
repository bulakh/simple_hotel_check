import React from "react";
import styles from './Login.module.scss';
import generalStyles from '../App/App.module.scss';
import cn from 'classnames';
import { useHistory } from "react-router";
import { AppRoute } from "../../const";

function Login() {
  const history = useHistory();

  const onSubmit = () => {
    history.push(AppRoute.MAIN)
  }

  return (
    <div className={cn(generalStyles.page, styles.wrap)}>
      <h1 className={generalStyles.hidden}>Вход в Simple Hotel Check</h1>
      <form action="#" className={styles.form}>
        <h2>Simple Hotel Check</h2>
        <ul className={styles.list}>
          <li>
            <label>
              <p>Логин</p>
              <input type="email" />
              {/* <span className={generalStyles.error__msg}>Тут ошибка</span> */}
            </label>
          </li>
          <li>
            <label>
              <p>Пароль</p>
              <input type="password" />
              {/* <span className={generalStyles.error__msg}>Тут ошибка</span> */}
            </label>
          </li>
        </ul>
        <button
          className={generalStyles.btn}
          type='button'
          onClick={onSubmit}
        >
          Войти
        </button>
      </form>
    </div>
  )
}

export default Login;
