import { SortType } from "../const";

export const sortHandler = (state, setState, setOtherState, otherState, styles, cn, dispatch, changeSort) => {
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
