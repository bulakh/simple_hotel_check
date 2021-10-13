import React from "react";
import styles from './Favorite.module.scss'
import generalStyles from '../App/App.module.scss';
import cn from 'classnames';

function Favorite() {
  return (
    <section className={styles.favorite}>
      <h2>Избранное</h2>
      <div>
        <button className={cn(styles.btn__sort, styles.btn__sort_up)}>Рейтинг</button>
        <button className={styles.btn__sort}>Цена</button>
      </div>
      <div className={cn(generalStyles.scroll, styles.list__wrap)}>
        <ul>
          <li>
            <h3>Moscow Marriott Grand Hotel</h3>
            <span className={styles.date}>
              28 June, 2020 &nbsp; — &nbsp; 1 день
            </span>
            <div className={styles.info}>
              <div className={styles.rating__wrap}>
                <span className={styles.rating} style={{width: '60%'}}></span>
              </div>
              <span className={styles.price}>Price:</span>
              <span className={styles.number}>23 924 ₽</span>
            </div>
            <button className={cn(generalStyles.btn__favorite, styles.btn__heart)}></button>
          </li>
        </ul>
        {/* <p className={generalStyles.empty}>Добавьте свой первый отель</p> */}
      </div>

    </section>
  )
}

export default Favorite;
