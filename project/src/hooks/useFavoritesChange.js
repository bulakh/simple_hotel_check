import { getItemDate } from "../utils";


export const removeFavorite = (id, allFavorites, dispatch, changeFavorites) => {
  const favorites = allFavorites.slice();

  favorites.forEach((hotel, index) => {
    if (hotel.hotelId === id) {
      favorites.splice(index, 1);
      dispatch(changeFavorites(favorites));
    }
  })
}

export const favoritesHandler = (
  id,
  allFavorites,
  allHotels,
  currentDate,
  currentDayCount,
  dispatch,
  changeFavorites) => {
  const favorites = allFavorites.slice();

  const addFavorite = () => {
    allHotels.forEach((hotel) => {

      const upgradedHotel = {
        ...hotel,
        date: getItemDate(currentDate),
        days: currentDayCount,
      }

      if (hotel.hotelId === id) {
        dispatch(changeFavorites([...favorites, upgradedHotel]))
      }
    });
  }

  const removeFavorite = (index) => {
    favorites.splice(index, 1);
    dispatch(changeFavorites(favorites));
  }

  if (favorites.length === 0) {
    addFavorite();
    } else {
      favorites.forEach((favorite, index) => {
        if (favorite.hotelId === id) {
          removeFavorite(index);
        } else {
          addFavorite();
        }
      });

    }
};
