import Card from "react-bootstrap/Card";

function CustomCard({ title, author, thumbnail }) {
  return (
    <Card style={{ width: "15rem", height: "37rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <details>
          <summary>Author:{author}</summary>
        </details>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
