import React from "react";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import styles from './Main.module.scss'
import generalStyles from '../App/App.module.scss';
import Form from "../Form/Form";
import Display from "../Display/Display";
import Favorite from "../Favorite/Favorite";

function Main() {
  return (
    <div className={generalStyles.page}>
      <header className={styles.header}>
        <h1>Simple Hotel Check</h1>
        <Link to={AppRoute.LOGIN} >
          Выйти
        </Link>
      </header>
      <main className={styles.main}>
        <Form />
        <Display />
        <Favorite />
      </main>
    </div>
  )
}

export default Main;
