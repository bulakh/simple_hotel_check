import React from 'react';
import { Link } from 'react-router-dom';

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
