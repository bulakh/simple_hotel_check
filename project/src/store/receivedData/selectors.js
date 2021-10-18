import { createSelector } from 'reselect';
import { NameSpace } from '../root-reducer';
import { SortType } from '../../const';

export const getHotels = (state) => state[NameSpace.RECEIVED_DATA].hotels;
export const getFavorites = (state) => state[NameSpace.RECEIVED_DATA].favorites;
export const getSort = (state) => state[NameSpace.RECEIVED_DATA].sort;
export const getImages = (state) => state[NameSpace.RECEIVED_DATA].images;

export const getSortedFavorites = createSelector(getFavorites, getSort, (favorites, sort) => {
  const currentFavorites = favorites.slice();

  switch (sort) {
    case SortType.TOP_RATED:
      return currentFavorites.sort((a, b) => b.stars - a.stars);

    case SortType.BOTTOM_RATED:
      return currentFavorites.sort((a, b) => a.stars - b.stars);

    case SortType.HIGH_TO_LOW:
      return currentFavorites.sort((a, b) => b.priceAvg - a.priceAvg);

    case SortType.LOW_TO_HIGH:
      return currentFavorites.sort((a, b) => a.priceAvg - b.priceAvg);

    default:
      return favorites;
  }
});
