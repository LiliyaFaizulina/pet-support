export const transformDate = date => {
  const dateString = new Date(date);
  const day = dateString.getDate().toString().padStart(2, '0');
  const month = (dateString.getMonth() + 1).toString().padStart(2, '0');
  const year = dateString.getFullYear();

  return `${day}.${month}.${year}`;
};
