import React from 'react';
import{ useState, useEffect } from 'react'
import './Event/Events.css'
import { NavLink } from "react-router-dom";
import EventFlyerCard from './EventFlyerCard/EventFlyerCard';
import {events} from '../Constants'
const Events = () => {
  const [checkNavtabClicked, setcheckNavtabClicked] = useState('all')
  const [filteredEvent, setFilteredEvent] = useState([])
  useEffect( ()=> {setFilteredEvent(events.upcoming), setcheckNavtabClicked('upcoming')}, [])
  const handleFilter = (category) => {
    setFilteredEvent(events[category])
    setcheckNavtabClicked(category)
  }

  return (
    <main className=" flex flex-col gap-5 p-4">
      <div className='event-page'>
        <div className='event-header-container'>
          <h1 className="text-3xl font-bold">Upcoming Events</h1>
          <div className='event-header-content-container'>
            <p>Check out our upcoming events and join us for a great time! Connecting with fellow students</p>
          </div>
          
        </div>

        
        <div className="event-content-container">
          <div className='event-navbar-container'>
            <ul className='event-navbar-content-container'>
            <li>
                <p className={checkNavtabClicked == 'upcoming'?'event-category-selected':'event-category'} onClick={()=> {handleFilter('upcoming')} }>Upcoming</p>
              </li>
              <li>
                <p className={checkNavtabClicked == 'all'?'event-category-selected':'event-category'} onClick={()=> {handleFilter('all')} }>All</p>
              </li>
              <li>
                <p className={checkNavtabClicked == 'workshops'?'event-category-selected':'event-category'} onClick={ () => { handleFilter('workshops')} }>Workshops</p>
              </li>
              <li>
                <p className={checkNavtabClicked == 'guestspeakers'?'event-category-selected': 'event-category' } onClick={ () => { handleFilter("guestspeakers")} }>Guest Speakers</p>
              </li>
              <li>
                <p className={checkNavtabClicked == 'networking'?'event-category-selected':'event-category'} onClick={ () => {handleFilter("networking")} }>Networking</p>
              </li>
              <li>
                <p>Tech Talks</p>
              </li>
              <li>
                <p>Social Events</p>
              </li>
            
            </ul>
          </div>
          

          <div className='event-flyers-container'>
          {console.log(filteredEvent)}
           {  
              filteredEvent? filteredEvent.map( (event, index) => (
                < EventFlyerCard key={index} event = {event} /> 
              ))
              : null
            
            }
            
          </div>
          
        </div>
        <div className='event-about-container'>
          <h1 className="text-2xl font-bold">About our Events</h1>
          <div className='event-about-content-container'>
            <p>At SACS (Society of Advancement in Computer Science), we offer a diverse range of events to support students' growth in Computer Science, whether they are just starting their programming journey, exploring new fields, or gaining insights into the tech industry. Our events provide a holistic experience, from workshops like CS Declassified, which breaks down core computer science concepts, to Acing Your Internship, where successful interns share their experiences and strategies for landing return offers. We also host networking opportunities like the SACS Interest Meeting, ensuring that students have access to both learning and professional growth. SACS is committed to fostering a supportive environment for all students interested in Computer Science.</p>

          </div>
        </div>
      </div>
    
    </main>
  )
}

export default Events
