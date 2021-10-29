import React, { useState } from 'react';
import styles from './Favorites.module.scss';
import generalStyles from '../App/App.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { getSortedFavorites } from '../../store/receivedData/selectors';
import { useDispatch } from 'react-redux';
import { changeFavorites, changeSort } from '../../store/actions';
import { SortType } from '../../const';

function Favorites() {
  const dispatch = useDispatch();

  const allFavorites = useSelector(getSortedFavorites);

  const [btnRateActive, setBtnRateActive] = useState(styles.btn__sort);
  const [btnPriceActive, setBtnPriceActive] = useState(styles.btn__sort);

  const removeFavorite = (id) => {
    const favorites = allFavorites.slice();

    favorites.forEach((hotel, index) => {
      if (hotel.hotelId === id) {
        favorites.splice(index, 1);
        dispatch(changeFavorites(favorites));
      }
    })
  }

  const sortHandler = (state, setState, setOtherState, otherState) => {
    if (state === styles.btn__sort) {
      setState(cn(styles.btn__sort, styles.btn__sort_up));
      setOtherState(styles.btn__sort);

      if (!otherState) {
        dispatch(changeSort(SortType.TOP_RATED));
      } else {
        dispatch(changeSort(SortType.HIGH_TO_LOW));
      }
    }

    if (state === cn(styles.btn__sort, styles.btn__sort_up)) {
      setState(cn(styles.btn__sort, styles.btn__sort_down));
      setOtherState(styles.btn__sort);

      if (!otherState) {
        dispatch(changeSort(SortType.BOTTOM_RATED));
      } else {
        dispatch(changeSort(SortType.LOW_TO_HIGH));
      }
    }

    if (state === cn(styles.btn__sort, styles.btn__sort_down)) {
      setState(styles.btn__sort);
      dispatch(changeSort(SortType.WITHOUT));
    }
  };

  return (
    <section className={styles.favorites}>
      <h2>Избранное</h2>
      {allFavorites.length !== 0 && <div>
        <button
          className={btnRateActive}
          onClick={() => sortHandler(btnRateActive, setBtnRateActive, setBtnPriceActive)}
        >
          Рейтинг
        </button>
        <button
          className={btnPriceActive}
          onClick={() => sortHandler(btnPriceActive, setBtnPriceActive, setBtnRateActive, btnRateActive)}
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
                  onClick={() => removeFavorite(hotel.hotelId)}
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
