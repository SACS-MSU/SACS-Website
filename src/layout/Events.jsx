import './Event/Events.css'
import { NavLink } from "react-router-dom";
const Events = () => {
  return (
    <main className=" flex flex-col gap-5 p-4">
      <div className='event-page'>
        <div className='event-header-container'>
          <h1 className="text-3xl font-bold">Upcoming Events</h1>
        </div>
        <p>Check out our upcoming events and join us for a great time! Connecting with fellow students</p>
        
        <div className="event-content-container">
          
          <ul className='event-navbar-content-container'>
            <li>
              <p>All</p>
            </li>
            <li>
              <p>Workshops</p>
            </li>
            <li>
              <p>Hackathons</p>
            </li>
            <li>
              <p>Guest Speakers</p>
            </li>
            <li>
              <p>Networking</p>
            </li>
            <li>
              <p>Tech Talks</p>
            </li>
            <li>
              <p>Social Events</p>
            </li>
           
          </ul>
          
        </div>
      </div>
    
    </main>
  )
}

export default Events
