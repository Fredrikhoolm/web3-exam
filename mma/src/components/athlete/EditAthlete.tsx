import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { IAthlete } from "../../interfaces/IAthlete";

const EditAthlete = () => {
  const location = useLocation();

  const [id] = useState<string>(
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
  );

  const [athlete, setAthlete] = useState<IAthlete>({
    id: "",
    name: "",
    image: "",
    age: "",
    nationality: "",
    record: "",
    style: "",
    division: "",
    nickname: "",
  });

  useEffect(() => {
    axios
      .get(`https://localhost:5001/MmaAthlete/${id}`)
      .then(response => {
        setAthlete(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleInput = (property: string, value: string) => {
    let athleteCopy = JSON.parse(JSON.stringify(athlete));

    switch (property) {
      case "name":
        athleteCopy.name = value;
        break;
      case "image":
        athleteCopy.image = value;
        break;
      case "age":
        athleteCopy.age = value;
        break;
      case "nationality":
        athleteCopy.nationality = value;
        break;
      case "record":
        athleteCopy.record = value;
        break;
      case "style":
        athleteCopy.style = value;
        break;
      case "division":
        athleteCopy.division = value;
        break;
      case "nickname":
        athleteCopy.nickname = value;
        break;
      default:
        return;
    }

    setAthlete(athleteCopy);
  };

  const putAthlete = () => {
    axios({
      method: "PUT",
      url: "https://localhost:5001/MmaAthlete",
      data: athlete,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resp => {
        console.log(resp);
        console.info(`Successfully updated ${athlete.name}`);
      })
      .catch(error => {
        console.error(error);
      });
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
                  name="name"
                  type="text"
                  value={athlete.name}
                  onChange={e => handleInput("name", e.target.value)}
                  placeholder="Skriv inn navn..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Alder</Form.Label>
                <Form.Control
                  onChange={e => handleInput("age", e.target.value)}
                  value={athlete.age}
                  name="age"
                  type="number"
                  placeholder="Skriv inn alder..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Nasjonalitet</Form.Label>
                <Form.Control
                  onChange={e => handleInput("nationality", e.target.value)}
                  name="nationality"
                  type="text"
                  value={athlete.nationality}
                  placeholder="Skriv inn nasjonalitet..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Kamphistorikk</Form.Label>
                <Form.Control
                  onChange={e => handleInput("record", e.target.value)}
                  name="record"
                  type="text"
                  value={athlete.record}
                  placeholder="Skriv inn kamphistorikk..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Vektklasse</Form.Label>
                <Form.Control
                  onChange={e => handleInput("division", e.target.value)}
                  name="division"
                  type="text"
                  value={athlete.division}
                  placeholder="Skriv inn vektklasse..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Kampsportstil</Form.Label>
                <Form.Control
                  onChange={e => handleInput("style", e.target.value)}
                  name="style"
                  type="text"
                  value={athlete.style}
                  placeholder="Skriv inn kampsportstil..."
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Kallenavn</Form.Label>
                <Form.Control
                  onChange={e => handleInput("nickname", e.target.value)}
                  name="nickname"
                  type="text"
                  value={athlete.nickname}
                  placeholder="Skriv inn kallenavn..."
                />
              </Form.Group>
            </Row>
            <Link to={`/athletes`}>
              <Button variant="primary" onClick={putAthlete}>
                Lagre utøver
              </Button>
            </Link>
            <Link to={`/athletes`}>
              <Button variant="primary"> Tilbake </Button>
            </Link>
          </Form>
        </Col>
        <Col>
          <Container fluid className="ImgPlaceholder">
            Placeholder Image
          </Container>
          <Form.Group>
            <Form.Label>Velg bilde</Form.Label>
            <Form.Control name="image" type="file" />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default EditAthlete;
