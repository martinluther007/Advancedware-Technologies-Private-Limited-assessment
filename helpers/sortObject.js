const sortData = (field, reverse) => {
  const key = function (x) {
    return x[field];
  };

  reverse = !reverse ? 1 : -1;

  return function (a, b) {
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  };
};

module.exports = sortData;
