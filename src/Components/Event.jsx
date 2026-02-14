import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '/images/placeholder.jpg';

const Event = ({ index, name, price, description, img, nbTickets, nbParticipants, like, onBookEvent, onToggleLike }) => {
  const isSoldOut = nbTickets === 0;

  return (
      <Col md={4} className="mb-4">
        <Card className="h-100 event-card">
          {isSoldOut && (
            <div style={{ position: 'relative' }}>
              <Card.Img variant="top" src={img ? `/images/${img}` : placeholderImage} 
                alt={name}
                style={{ height: '200px', objectFit: 'cover', opacity: 0.5 }}
              />
              <img 
                src="/images/sold_out.png" 
                alt="Sold Out" 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '150px'
                }}
              />
            </div>
          )}
          {!isSoldOut && (
            <Card.Img variant="top" src={img ? `/images/${img}` : placeholderImage} 
              alt={name}
              style={{ height: '200px', objectFit: 'cover' }}
            />
          )}
          <Card.Body>
            <Card.Title>
              <Link 
                to={`/events/${encodeURIComponent(name)}`}
                style={{ 
                  textDecoration: 'none', 
                  color: '#007bff',
                  cursor: 'pointer'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {name}
              </Link>
            </Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Text>
              <strong>Price:</strong> {price}
            </Card.Text>
            <Card.Text>
              <strong>Number of tickets:</strong> {nbTickets}
            </Card.Text>
            <Card.Text>
              <strong>Number of participants:</strong> {nbParticipants}
            </Card.Text>
            <div className="d-flex gap-2">
              <Button 
                variant={like ? "danger" : "info"} 
                onClick={() => onToggleLike(index)}
              >
                {like ? "Dislike" : "Like"}
              </Button>
              <Button 
                variant="primary" 
                onClick={() => onBookEvent(index)}
                disabled={isSoldOut}
              >
                Book an event
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default Event;
