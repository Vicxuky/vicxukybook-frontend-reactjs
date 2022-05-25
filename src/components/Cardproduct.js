import { Card, Button } from "react-bootstrap";

const Cardproduct = (props) => {
  return (
    <>
      <Card
        style={{
          // width: "13.6rem",
          width: props.width,

          // marginTop: "5px",
          marginBottom: "8px",
          marginLeft: "0px",
        }}
      >
        <Card.Img variant="center" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
        <Button variant="warning" className="btn-block">
          XEM NGAY
        </Button>
      </Card>
    </>
  );
};
export default Cardproduct;
