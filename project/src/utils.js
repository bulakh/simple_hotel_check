export const getDisplayDate = (date) => {
  return new Date(date).toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: '2-digit'}).slice(0, -3);
}

export const getItemDate = (date) => {
  return `${new Date(date).toLocaleString('en-US', {day:'2-digit'})}
          ${new Date(date).toLocaleString('en-US', {month: 'long'})},
          ${new Date(date).toLocaleString('en-US', {year: 'numeric'})}`;
}

export const parsedDate = (date) => {
  const dateItems = date.split('.');
  const forDate = `${dateItems[2]}-${dateItems[1]}-${dateItems[0]}`;

  return new Date(forDate);
}
