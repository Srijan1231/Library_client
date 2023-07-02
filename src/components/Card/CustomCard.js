import Card from "react-bootstrap/Card";

function CustomCard({ title, author, thumbnail, summary }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h4>Author:{author}</h4>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
