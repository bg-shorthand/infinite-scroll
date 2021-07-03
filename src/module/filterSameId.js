const filterSameId = (array) => {
  return array.filter(
    (item, index, arr) =>
      arr.indexOf(arr.find((v) => v.id === item.id)) === index
  );
};

export default filterSameId;
