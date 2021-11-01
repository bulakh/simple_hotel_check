import React, { useState } from 'react';
import styles from './Favorites.module.scss';
import generalStyles from '../App/App.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { getSortedFavorites } from '../../store/receivedData/selectors';
import { useDispatch } from 'react-redux';
import { changeFavorites, changeSort } from '../../store/actions';
import { sortHandler } from '../../hooks/useFavoritesSort.js';
import { removeFavorite } from '../../hooks/useFavoritesChange';

function Favorites() {
  const dispatch = useDispatch();

  const allFavorites = useSelector(getSortedFavorites);

  const [btnRateActive, setBtnRateActive] = useState(styles.btn__sort);
  const [btnPriceActive, setBtnPriceActive] = useState(styles.btn__sort);

  return (
    <section className={styles.favorites}>
      <h2>Избранное</h2>
      {allFavorites.length !== 0 && <div>
        <button
          className={btnRateActive}
          onClick={() => sortHandler(
            btnRateActive,
            setBtnRateActive,
            setBtnPriceActive,
            undefined,
            styles,
            cn,
            dispatch,
            changeSort)}
        >
          Рейтинг
        </button>
        <button
          className={btnPriceActive}
          onClick={() => sortHandler(
            btnPriceActive,
            setBtnPriceActive,
            setBtnRateActive,
            btnRateActive,
            styles,
            cn,
            dispatch,
            changeSort)}
        >
          Цена
        </button>
      </div>}
      <div className={cn(generalStyles.scroll, styles.list__wrap)}>
        <ul>
          {allFavorites.length === 0
          ? <p className={generalStyles.empty}>Добавьте свой первый отель</p>
          : allFavorites.map((hotel) => (
              <li key={hotel.hotelId} >
                <h3>{hotel.hotelName}</h3>
                <span className={styles.date}>
                  {hotel.date} &nbsp; — &nbsp; {hotel.days} days
                </span>
                <div className={styles.info}>
                  <div className={styles.rating__wrap}>
                    <span
                      className={styles.rating}
                      style={{width: `${Math.round(hotel.stars) * 20}%`}}
                    ></span>
                  </div>
                  <span className={styles.price}>Price:</span>
                  <span className={styles.number}>{hotel.priceAvg} ₽</span>
                </div>
                <button
                  className={cn(generalStyles.btn__favorites, styles.btn__heart)}
                  onClick={() => removeFavorite(hotel.hotelId, allFavorites, dispatch, changeFavorites)}
                >
                </button>
              </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default Favorites;
