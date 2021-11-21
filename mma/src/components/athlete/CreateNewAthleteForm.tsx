import { FC, ChangeEvent, useState } from "react";
import { athleteService } from "../../services/athleteService";
import { IAthlete } from "../../interfaces/IAthlete";
import AthleteDetails from "./AthleteDetails";
import "../../css/CreateNewAthleteForm.css";
import {
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
} from "react-bootstrap";

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
                <Form.Label>Alder</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="age"
                  type="text"
                  placeholder="Skriv inn alder..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Nasjonalitet</Form.Label>
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
                <Form.Label>Kamphistorikk</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="record"
                  type="text"
                  placeholder="Skriv inn kamphistorikk..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Vektklasse</Form.Label>
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
                <Form.Label>Kampsportstil</Form.Label>
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
                <Form.Label>Kallenavn</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="nickname"
                  type="text"
                  placeholder="Skriv inn kallenavn..."
                />
              </Form.Group>
            </Row>

            <input
              onClick={postNewAthlete}
              type="button"
              value="Lagre ny utøver"
            />
          </Form>
        </Col>
        <Col>
          <Container fluid className="ImgPlaceholder">
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

export default CreateNewAthleteForm;
