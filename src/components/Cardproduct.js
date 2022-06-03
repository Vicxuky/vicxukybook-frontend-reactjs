import { Card, Button } from "react-bootstrap";
import "./Cardproduct.scss";
const Cardproduct = (props) => {
  return (
    <>
      <Card
        className="card-product"
        style={{
          //   // width: "13.6rem",
          width: props.width,

          //   marginTop: "10px",
          //   paddingTop: "10px",
          //   marginBottom: "8px",
          //   marginLeft: "0px",
        }}
      >
        <Card.Img
          className="img-cardproduct"
          variant="center"
          src={props.image}
        />
        <Card.Body>
          <Card.Title>
            <h2>{props.title}</h2>
          </Card.Title>
          <Card.Text>{props.price} đ</Card.Text>
        </Card.Body>
        <Button
          variant="warning"
          className="btn-block text-light btn-cardproduct"
        >
          XEM NGAY
        </Button>
      </Card>
    </>
  );
};
export default Cardproduct;
