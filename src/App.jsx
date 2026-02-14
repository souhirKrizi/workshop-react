import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Events from './Components/Events.jsx';
import eventsData from './events.json';

function App() {
  const [events, setEvents] = useState(eventsData);
  const [showAlert, setShowAlert] = useState(false);

  const handleBookEvent = (index) => {
    const updatedEvents = [...events];
    if (updatedEvents[index].nbTickets > 0) {
      updatedEvents[index].nbParticipants += 1;
      updatedEvents[index].nbTickets -= 1;
      setEvents(updatedEvents);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    }
  };

  const handleToggleLike = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].like = !updatedEvents[index].like;
    setEvents(updatedEvents);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Events App</h1>
      </header>
      {showAlert && (
        <Alert variant="success" className="text-center">
          You have booked an event
        </Alert>
      )}
      <main>
        <Events events={events} onBookEvent={handleBookEvent} onToggleLike={handleToggleLike} />
      </main>
    </div>
  );
  
}

export default App;
