import "./Card2.scss";

const Card2 = (props) => {
  // format price
  function moneyFormat(price, sign = " đ") {
    const pieces = parseFloat(price).toFixed(2).split("");
    let ii = pieces.length - 3;
    while ((ii -= 3) > 0) {
      pieces.splice(ii, 0, ",");
    }
    return pieces.join("") + sign;
  }
  return (
    <div className="card-tow d-flex justify-content-around col-lg-6 p-1 py-3">
      <div className="card-tow-img">
        <img width={148} alt="123" src={props.image} />
      </div>
      <div className="card-tow-body">
        <div className="card-tow-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-tow-price">{moneyFormat(props.price)}</div>
      </div>
    </div>
  );
};
export default Card2;
