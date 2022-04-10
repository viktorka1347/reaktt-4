export function findById(array, id) {
  return array.findIndex((item) => item.id === id);
}

export function findByDate(array, date) {
  return array.findIndex((item) => item.date === date);
}

export function sortByDate(array) {
  return array.sort((item1, item2) => item2.date - item1.date);
}