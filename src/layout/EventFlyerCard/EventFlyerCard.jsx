import React from 'react';
import './EventFlyerCard.css';

const EventFlyerCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-card-img">
        <img src={event.Event_flyer} alt={event.Name} />
      </div>
      <div className="event-card-text">
        <h2 className="event-title">{event.Name}</h2>
        <p><strong>Description:</strong> <span className="description">{event.Description}</span></p>
        <p><strong>Date:</strong> <span>{event.Date}</span></p>
      </div>
    </div>
  );
};

export default EventFlyerCard;
