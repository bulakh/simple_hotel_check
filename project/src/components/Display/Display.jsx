import React from "react";
import styles from './Display.module.scss'
import generalStyles from '../App/App.module.scss';
import cn from 'classnames';
import { useSelector } from "react-redux";
import { getLocation } from "../../store/inputData/selectors";
import { getHotels } from "../../store/receivedData/selectors";
// import Loading from '../Loading/Loading.jsx';

function Display() {
  const currentLocation = useSelector(getLocation);
  const allHotels = useSelector(getHotels);


  console.log('inCompo', allHotels)


  return (
    <section className={styles.display}>
      <div className={styles.header__wrap}>
        <h2>Отели</h2>
        <p className={styles.location}>{currentLocation}</p>
        <p className={styles.checkindate}>07 июля 2020</p>
      </div>
      <div className={styles.carousel}>
        <ul>
          <li style={{backgroundColor: 'green'}}></li>
          <li style={{backgroundColor: 'yellow'}}></li>
          <li style={{backgroundColor: 'grey'}}></li>
          <li style={{backgroundColor: 'black'}}></li>
          <li style={{backgroundColor: 'white'}}></li>
          <li style={{backgroundColor: 'pink'}}></li>
          <li style={{backgroundColor: 'blue'}}></li>
          <li style={{backgroundColor: 'purple'}}></li>
          <li style={{backgroundColor: 'brown'}}></li>
        </ul>
      </div>

      <p className={styles.added}>
        Добавлено в Избранное: &nbsp;<span>3</span> отеля
      </p>

      <div className={cn(generalStyles.scroll, styles.list__wrap)}>
        <ul className={styles.list}>

          {allHotels.length === 0 ?
            <p className={generalStyles.empty}>Отелей не найдено</p>
            :
            allHotels.map((hotel) => (
              <li key={hotel.hotelId}>
                <div className={styles.icon}></div>
                <div className={styles.li__wrap}>
                  <h3>{hotel.hotelName}</h3>
                  <span className={styles.date}>
                    28 June, 2020 &nbsp; — &nbsp; 1 день
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
                  <button className={cn(generalStyles.btn__favorite, styles.btn__heart)}></button>
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
