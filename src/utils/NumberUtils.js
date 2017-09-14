const getRandom = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

exports.getRandom = getRandom;
