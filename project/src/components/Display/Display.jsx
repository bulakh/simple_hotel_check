import React, { useRef } from 'react';
import styles from './Display.module.scss';
import generalStyles from '../App/App.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { getDate, getLocation, getDayCount } from '../../store/inputData/selectors';
import { getFavorites, getHotels, getImages } from '../../store/receivedData/selectors';
import { getDisplayDate, getItemDate } from '../../utils.js';
import { useDispatch } from 'react-redux';
import { changeFavorites } from '../../store/actions';
import { scrollLeft, scrollRigth } from '../../hooks/useSlider.js';
import { favoritesHandler } from '../../hooks/useFavoritesChange.js';

function Display() {
  const dispatch = useDispatch();

  const listRef = useRef();

  const currentLocation = useSelector(getLocation);
  const currentDate = useSelector(getDate);
  const currentDayCount = useSelector(getDayCount);
  const allHotels = useSelector(getHotels);
  const allFavorites = useSelector(getFavorites);
  const allImages = useSelector(getImages);

  return (
    <section className={styles.display}>
      <div className={styles.header__wrap}>
        <h2>Отели</h2>
        <p className={styles.location}>{currentLocation}</p>
        <p className={styles.checkindate}>{getDisplayDate(currentDate)}</p>
      </div>
      {allImages.length !== 0 &&
        <div className={styles.carousel}>
          <ul ref={listRef}>
          {allImages.map((image) => (
            <li key={image.id}>
              <img src={image.download_url} alt={image.author} />
            </li>
          ))}
          </ul>
          <button
            className={cn(styles.btn__scroll, styles.btn__scroll_left)}
            type='button'
            onClick={() => scrollLeft(listRef)}
          >
          </button>
          <button
            className={cn(styles.btn__scroll, styles.btn__scroll_rigth)}
            type='button'
            onClick={() => scrollRigth(listRef)}
          >
          </button>
        </div>
      }

      <p className={styles.added}>
        Добавлено в Избранное: &nbsp;<span>{allFavorites.length}</span> отеля
      </p>

      <div className={cn(generalStyles.scroll, styles.list__wrap)}>
        <ul className={styles.list}>
          {allHotels.length === 0 || allHotels.status === 'error'
            ? <p className={generalStyles.empty}>Отелей не найдено</p>
            : allHotels.map((hotel) => (
                <li key={hotel.hotelId}>
                  <div className={styles.icon}></div>
                  <div className={styles.li__wrap}>
                    <h3>{hotel.hotelName}</h3>
                    <span className={styles.date}>
                      {getItemDate(currentDate)} &nbsp; — &nbsp; {currentDayCount} days
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
                      onClick={() => favoritesHandler(
                        hotel.hotelId,
                        allFavorites,
                        allHotels,
                        currentDate,
                        currentDayCount,
                        dispatch,
                        changeFavorites)}
                    >
                    </button>
                  </div>
                </li>
            ))
          }
        </ul>
      </div>

    </section>
  )
}

export default Display;
