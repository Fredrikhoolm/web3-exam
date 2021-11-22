import { FC, ChangeEvent, useState } from "react";
import { athleteService } from "../../services/athleteService";
import { IAthlete } from "../../interfaces/IAthlete";
import AthleteDetails from "./AthleteDetails";
import "../../css/CreateNewForm.css";
import {
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateNewAthleteForm: FC = () => {
  const [newAthlete, setNewAthlete] = useState<IAthlete>({
    name: "",
    image: "",
    age: "",
    nationality: "",
    record: "",
    style: "",
    division: "",
    nickname: "",
  });
  const [newImage, setNewImage] = useState<File>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name } = event.target;
    let { value } = event.target;
    switch (name) {
      case "name":
        setNewAthlete({ ...newAthlete, name: value });

        break;
      case "image":
        let { files } = event.target;
        if (files) {
          console.log(files[0]);
          setNewAthlete({ ...newAthlete, image: files[0].name });
          setNewImage(files[0]);
        }

        break;
      case "age":
        setNewAthlete({ ...newAthlete, age: value });
        break;

      case "nationality":
        setNewAthlete({ ...newAthlete, nationality: value });
        break;

      case "record":
        setNewAthlete({ ...newAthlete, record: value });
        break;

      case "style":
        setNewAthlete({ ...newAthlete, style: value });
        break;

      case "division":
        setNewAthlete({ ...newAthlete, division: value });
        break;

      case "nickname":
        setNewAthlete({ ...newAthlete, nickname: value });
        break;
    }
  };
  const postNewAthlete = () => {
    console.log(newAthlete);
    console.log(newImage);
    athleteService.postNewAthlete(newAthlete, newImage as File);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Row>
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
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h5>Alder</h5>
                </Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="age"
                  type="number"
                  placeholder="Skriv inn alder..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h5>Nasjonalitet</h5>
                </Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="nationality"
                  type="text"
                  placeholder="Skriv inn nasjonalitet..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h5>Kamphistorikk</h5>
                </Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="record"
                  type="text"
                  placeholder="Skriv inn kamphistorikk..."
                />
              </Form.Group>
            </Row>
          </Form>
        </Col>
        <Col>
          <Row>
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>Vektklasse</h5>
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="division"
                type="text"
                placeholder="Skriv inn vektklasse..."
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3">
              <Form.Label>
                <h5>Kampsportstil</h5>
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="style"
                type="text"
                placeholder="Skriv inn kampsportstil..."
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3">
              <Form.Label>
                {" "}
                <h5>Kallenavn</h5>
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="nickname"
                type="text"
                placeholder="Skriv inn kallenavn..."
              />
            </Form.Group>
          </Row>

          <Form.Group>
            <Form.Label>
              <h5>Last opp bilde</h5>
            </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="image"
              type="file"
              size="lg"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="mt-5">
            <Link
              className="d-grid gap-2 text-decoration-none"
              to={`/athletes`}
            >
              <Button size="lg" variant="outline-dark" onClick={postNewAthlete}>
                {" "}
                Lagre utøver{" "}
              </Button>
            </Link>
          </Container>
        </Col>
        <Col>
          <Container className="mt-5">
            <Link
              className="d-grid gap-2 text-decoration-none"
              to={`/athletes`}
            >
              <Button variant="outline-dark" size="lg">
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

export default CreateNewAthleteForm;
