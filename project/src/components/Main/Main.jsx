import React from 'react';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import styles from './Main.module.scss'
import generalStyles from '../App/App.module.scss';
import Form from '../Form/Form';
import Display from '../Display/Display';
import Favorites from '../Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { changeEmail, changeFavorites } from '../../store/actions';

function Main() {
  const dispatch = useDispatch();

  const logout = () => {
    delete localStorage.email;
    dispatch(changeEmail(''));
    dispatch(changeFavorites([]));
  }

  return (
    <div className={generalStyles.page}>
      <header className={styles.header}>
        <h1>Simple Hotel Check</h1>
        <Link to={AppRoute.LOGIN} onClick={logout}>
          Выйти
        </Link>
      </header>
      <main className={styles.main}>
        <Form />
        <Display />
        <Favorites />
      </main>
    </div>
  )
}

export default Main;
