import React, { useState, useEffect } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { getallEvents, deleteEvent } from "../Service/Api";
import Event from './Event';

const Events = ({ onBookEvent, onToggleLike }) => {

  const [showWelcome, setShowWelcome] = useState(false);
  const [events, setEvents] = useState([]); 

  // ✅ Charger les events depuis JSON server
  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const result = await getallEvents();
      setEvents(result.data);
    } catch (error) {
      console.error("Error loading events:", error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await deleteEvent(id);
      loadEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

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
              key={event.id}
              id={event.id}
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
              onDeleteEvent={handleDeleteEvent}
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