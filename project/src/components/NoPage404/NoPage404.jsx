import React from "react";
import { Link } from "react-router-dom";
// import styles from './NoPage404.module.scss'

function NoPage404() {
  return (
    <>
      <h1>
        Такой страницы нет =(
      </h1>
      <Link to='/'>
        Вернуться в начало
      </Link>
    </>
  )
}

export default NoPage404;
