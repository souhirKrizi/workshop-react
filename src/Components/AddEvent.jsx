import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { addEvent } from '../Service/Api';

const AddEvent = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    name: '',
    description: '',
    img: '',
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: name === 'price' || name === 'nbTickets' || name === 'nbParticipants' 
        ? Number(value) 
        : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEvent(event);
      navigate('/events');
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Add a new Event to your Event List</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
            placeholder="Enter a Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={event.description}
            onChange={handleChange}
            placeholder="Enter description"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={event.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={event.nbTickets}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setEvent({ ...event, img: file.name });
              }
            }}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add an Event
        </Button>
        <Button variant="secondary" className="ms-2" onClick={() => navigate('/events')}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default AddEvent;
