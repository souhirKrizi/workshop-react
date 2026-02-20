import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getallEvents, editEvent } from '../Service/Api';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img: '',
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false
  });

  // Charger l’événement depuis JSON server
  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    try {
      const result = await getallEvents(id);
      if (result.data && !Array.isArray(result.data)) {
        setEvent(result.data);
        setFormData(result.data);
      } else {
        setEvent(null);
      }
    } catch (error) {
      setEvent(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' || name === 'nbTickets' || name === 'nbParticipants' 
        ? Number(value) 
        : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editEvent(id, formData);
      setEvent(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  if (!event) {
    return (
      <Container className="mt-5">
        <h2>Event does not exist</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      {!isEditing ? (
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
            <Card.Text>
              <strong>Number of Tickets</strong>
              <p>{event.nbTickets}</p>
            </Card.Text>
            <Card.Text>
              <strong>Number of Participants</strong>
              <p>{event.nbParticipants}</p>
            </Card.Text>
            <Button variant="primary" onClick={() => setIsEditing(true)}>
              Edit Event
            </Button>
            <Button variant="secondary" className="ms-2" onClick={() => navigate('/events')}>
              Back to Events
            </Button>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <h2>Edit Event</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  name="img"
                  value={formData.img}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Number of Tickets</Form.Label>
                <Form.Control
                  type="number"
                  name="nbTickets"
                  value={formData.nbTickets}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Number of Participants</Form.Label>
                <Form.Control
                  type="number"
                  name="nbParticipants"
                  value={formData.nbParticipants}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update Event
              </Button>
              <Button variant="secondary" className="ms-2" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default EventDetails;