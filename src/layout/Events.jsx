import React from 'react';
import { useState, useEffect } from 'react';
import { events } from '../Constants';
import EventFlyerCard from './EventFlyerCard/EventFlyerCard';

const Events = () => {
  const [checkNavtabClicked, setCheckNavtabClicked] = useState('upcoming');
  const [filteredEvent, setFilteredEvent] = useState([]);

  useEffect(() => {
    setFilteredEvent(events.upcoming);
    setCheckNavtabClicked('upcoming');
  }, []);

  const handleFilter = (category) => {
    setFilteredEvent(events[category]);
    setCheckNavtabClicked(category);
  };

  const categories = [
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'all', label: 'All' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'guestspeakers', label: 'Guest Speakers' },
    { id: 'networking', label: 'Networking' },
    { id: 'techtalks', label: 'Tech Talks' },
    { id: 'social', label: 'Social Events' }
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Upcoming Events
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl">
            Check out our upcoming events and join us for a great time! Connecting with fellow students
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <nav className="min-w-full inline-flex px-4 sm:px-0">
            <ul className="flex space-x-2 sm:space-x-4 pb-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleFilter(category.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm sm:text-base transition-colors
                      ${checkNavtabClicked === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvent?.map((event, index) => (
            <EventFlyerCard key={index} event={event} />
          ))}
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            About our Events
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At SACS (Society of Advancement in Computer Science), we offer a diverse range of events to support students' growth in Computer Science, whether they are just starting their programming journey, exploring new fields, or gaining insights into the tech industry. Our events provide a holistic experience, from workshops like CS Declassified, which breaks down core computer science concepts, to Acing Your Internship, where successful interns share their experiences and strategies for landing return offers. We also host networking opportunities like the SACS Interest Meeting, ensuring that students have access to both learning and professional growth. SACS is committed to fostering a supportive environment for all students interested in Computer Science.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Events;