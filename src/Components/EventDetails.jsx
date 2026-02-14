import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import eventsData from '../events.json';

const EventDetails = () => {
  const { name } = useParams();
  const event = eventsData.find(e => e.name === decodeURIComponent(name));

  if (!event) {
    return (
      <Container className="mt-5">
        <h2>Event not found</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img 
            src={`/images/${event.img}`} 
            alt={event.name}
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
        <Col md={6}>
          <h2>{event.name}</h2>
          <Card.Text className="mt-3">
            <strong>Description</strong>
            <p>{event.description}</p>
          </Card.Text>
          <Card.Text>
            <strong>Price</strong>
            <p>{event.price} DT</p>
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetails;
