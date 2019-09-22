export default (a, b) => {
  if (a.lastName < b.lastName) {
    return -1;
  }
  if (a.lastName > b.lastName) {
    return 1;
  }
  return 0;
};
