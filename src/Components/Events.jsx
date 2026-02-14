import React, { useState, useEffect } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import Event from './Event';

const Events = ({ events, onBookEvent, onToggleLike }) => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
      const hideTimer = setTimeout(() => setShowWelcome(false), 3000);
      return () => clearTimeout(hideTimer);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="events-container">
      {showWelcome && (
        <Alert variant="info" className="text-center">
          Hey welcome to Esprit Events
        </Alert>
      )}
      <Row>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <Event
              key={index}
              index={index}
              name={event.name}
              price={event.price}
              description={event.description}
              img={event.img}
              nbTickets={event.nbTickets}
              nbParticipants={event.nbParticipants}
              like={event.like}
              onBookEvent={onBookEvent}
              onToggleLike={onToggleLike}
            />
          ))
        ) : (
          <Col>
            <p className="no-events">No events available</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Events;
