export default (a, b) => {
  if (a.name.last < b.name.last) {
    return -1;
  }
  if (a.name.last > b.name.last) {
    return 1;
  }
  return 0;
};
