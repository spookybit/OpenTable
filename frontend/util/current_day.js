export const currentDate = () => {
  let time = new Date();

  let zero = "0";
  let year = time.getFullYear().toString();

  let month = time.getMonth();
  month = month + 1;
  month = month.toString();
  if (month.length === 1) {
    month = zero.concat(month);
  }

  let day = time.getDate().toString();
  if (day.length === 1) {
    day = zero.concat(day);
  }

  return `${year}-${month}-${day}`;
};

export const checkValidDate = (date) => {
  let current = currentDate();
  current = current.slice(0, 4).concat(current.slice(5, 7)).concat(current.slice(8));
  current = parseInt(current);

  let entry = date.slice(0, 4).concat(date.slice(5, 7)).concat(date.slice(8));
  entry = parseInt(entry);

  if (current >= entry) {
    return true;
  } else {
    return false;
  }
};
