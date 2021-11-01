import { parsedDate } from "../utils";

export const blurHandler = (
  evt,
  location,
  setLocation,
  date,
  setDate,
  count,
  setCount) => {
  switch(evt.target.name) {
    case 'location':
      setLocation({...location, dirty: true})
      break
    case 'date':
      setDate({...date, dirty: true});
      break
    case 'count':
      setCount({...count, dirty: true});
      break
    default:
  }
}

export const focusHandler = (
  evt,
  location,
  setLocation,
  date,
  setDate,
  count,
  setCount) => {
  switch(evt.target.name) {
    case 'location':
      setLocation({...location, dirty: false});
      break
    case 'date':
      setDate({...date, dirty: false});
      break
    case 'count':
      setCount({...count, dirty: false});
      break
    default:
  }
}

export const locationHandler = (evt, location, setLocation) => {
  if (!evt.target.value) {
    setLocation({...location, error: 'Введите город'});
  } else {
    setLocation({...location, error: '', name: evt.target.value});
  }
}

export const dateHandler = (evt, date, setDate, setStartDate) => {
  if (parsedDate(evt.target.value).toString() === 'Invalid Date') {
    setDate({...date, error: 'Введите корректную дату'});
    if (!evt.target.value) {
      setDate({...date, error: 'Дата должна быть'});
    }
  } else {
    setDate({...date, error: '', selected: evt.target.value});
    setStartDate(parsedDate(evt.target.value));
  }
}

export const daysCountHandler = (evt, count, setCount) => {
  if (!evt.target.value || Number(evt.target.value) === 0) {
    setCount({...count, error: 'Насколько дней?'});
  } else {
    setCount({...count, error: '', current: evt.target.value});
  }
}

export const datePickerHandler = (date, setStartDate, dateRef) => {
  setStartDate(date);
  dateRef.current.state.numAsString = date.toLocaleDateString().split('.').join('');
}
