import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { events } from '../Constants';
import EventFlyerCard from './EventFlyerCard/EventFlyerCard';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('upcoming');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    setFilteredEvents(events.upcoming);
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setFilteredEvents(events[category] || []);
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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-12">
      <motion.section 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Events at SACS</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Explore our range of events designed to educate, connect, and inspire computer science students at Morgan State.
        </p>
      </motion.section>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilter(category.id)}
            className={`px-4 py-2 rounded-full font-medium text-sm shadow-sm transition 
              ${selectedCategory === category.id 
                ? 'bg-blue-700 text-white' 
                : 'bg-white text-blue-700 border border-blue-300 hover:bg-blue-100'}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <motion.section 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {filteredEvents?.length ? (
          filteredEvents.map((event, index) => (
            <EventFlyerCard key={index} event={event} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">No events found for this category.</p>
        )}
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="mt-20 bg-white rounded-2xl shadow-md p-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Attend Our Events?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          SACS events are designed to elevate your computer science journey—whether you're a beginner or an advanced learner. We host interactive workshops, engaging tech talks, networking mixers, and more. Join us to build your skills, connect with peers and industry professionals, and find inspiration for your next big idea.
        </p>
      </motion.section>
    </main>
  );
};

export default Events;
