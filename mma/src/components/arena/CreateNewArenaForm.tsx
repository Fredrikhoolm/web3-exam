import { FC, ChangeEvent, useState } from "react";
import { arenaService } from "../../services/arenaService";
import { IArena } from "../../interfaces/IArena";
import { Row, Form, Container, Col, Button } from "react-bootstrap";
import "../../css/CreateNewForm.css";
import { Link } from "react-router-dom"

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
      <Row>
        <Col>
          <Form>
            <Row>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Navn</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Skriv inn navn..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Kapasitet</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="capacity"
                  type="number"
                  placeholder="Skriv inn kapasitet..."
                />
              </Form.Group>
            </Row>
            <Link to={`/arena`}><Button variant="primary" 
          onClick={postNewArena}> Lagre arena </Button></Link>
          <Link to={`/arena`}><Button variant="primary" 
          > Tilbake </Button></Link>
          </Form>
        </Col>
        <Col>
          <Container fluid className="ImgPlaceholderArena">
            Placeholder Image
          </Container>
          <Form.Group>
            <Form.Label>Velg bilde</Form.Label>
            <Form.Control onChange={handleChange} name="image" type="file" />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateNewArenaForm;
