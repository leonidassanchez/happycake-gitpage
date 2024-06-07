import Card from "react-bootstrap/Card";
import cakeImage from "../assets/img/cakeimg.jpg";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        margin: "30px",
      }}
    >
      <Card
        style={{ width: "18rem", textAlign: "center", alignItems: "center" }}
      >
        <Card.Body>
          <Card.Title>
            Bienvenidos a <strong>Happy Cake</strong>
          </Card.Title>
          <Card.Text style={{ color: "#B4B4B4" }}>
            El lugar de los pasteles felices
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={cakeImage} style={{ width: "45px" }} />
      </Card>
    </div>
  );
}

export default HomePage;
