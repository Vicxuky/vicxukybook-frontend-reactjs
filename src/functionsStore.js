let moneyFormat = (price, sign = " $") => {
  const pieces = parseFloat(price).toFixed(2).split("");
  let ii = pieces.length - 3;
  while ((ii -= 3) > 0) {
    pieces.splice(ii, 0, ".");
  }
  return pieces.join("") + sign;
};

const formatCashVN = (str, sign = " đ") => {
  return str
    .toString()
    .split("")
    .reverse()

    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ",") + prev;
    })
    .concat(sign);
};

module.exports = { moneyFormat, formatCashVN };
