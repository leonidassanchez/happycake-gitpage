import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contacto() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "30px",
          textAlign: "center",
        }}
      >
        <h2>Cuéntanos, ¿En que te podemos ayudar?</h2>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "30px",
          textAlign: "center",
        }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="danger">Enviar</Button>{" "}
        </Form>
      </div>
    </>
  );
}

export default Contacto;
