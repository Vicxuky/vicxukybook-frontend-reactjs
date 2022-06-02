import "./Card2.scss";

const Card2 = (props) => {
  return (
    <div className="card-tow d-flex justify-content-around col-lg-6 p-1 py-3">
      <div className="card-tow-img">
        <img width={148} alt="123" src={props.image} />
      </div>
      <div className="card-tow-body">
        <div className="card-tow-title">{props.title}</div>
        <div className="card-tow-price">{props.price}</div>
      </div>
    </div>
  );
};
export default Card2;
