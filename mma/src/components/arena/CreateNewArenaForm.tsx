import { FC, ChangeEvent, useState } from "react";
import { arenaService } from "../../services/arenaService";
import { IArena } from "../../interfaces/IArena";
import { Row, Form, Container, Col, Button } from "react-bootstrap";
import "../../css/CreateNewForm.css";
import { Link } from "react-router-dom";

const CreateNewArenaForm: FC = () => {
  const [newArena, setNewArena] = useState<IArena>({
    name: "",
    image: "",
    capacity: "",
  });
  const [newImage, setNewImage] = useState<File>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name } = event.target;
    let { value } = event.target;
    switch (name) {
      case "name":
        setNewArena({ ...newArena, name: value });
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          console.log(files[0]);
          setNewArena({ ...newArena, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
      case "capacity":
        setNewArena({ ...newArena, capacity: value });
        break;
    }
  };
  const postNewArena = () => {
    console.log(newArena);
    console.log(newImage);
    arenaService.postNewArena(newArena, newImage as File);
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            {" "}
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>Navn</h5>
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Skriv inn navn..."
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>Kapasitet</h5>
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="capacity"
                type="number"
                placeholder="Skriv inn kapasitet..."
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <Form.Group>
        <Form.Label>Last opp bilde</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="image"
          type="file"
          size="lg"
        />
      </Form.Group>

      <Row>
        <Col>
          <Container className="mt-5">
            <Link className="d-grid gap-2 text-decoration-none" to={`/arena`}>
              <Button size="lg" variant="outline-dark" onClick={postNewArena}>
                {" "}
                Lagre arena{" "}
              </Button>
            </Link>
          </Container>
        </Col>
        <Col>
          <Container className="mt-5">
            <Link className="d-grid gap-2 text-decoration-none" to={`/arena`}>
              <Button size="lg" variant="outline-dark">
                {" "}
                Tilbake{" "}
              </Button>
            </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateNewArenaForm;
