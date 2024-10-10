import React from 'react'
import './EventFlyerCard.css'

const EventFlyerCard = (props) => {
    console.log('here are the props', props)
  return (
    <div className='FlyerCard'>
        <div className='FlyerCard-img-container'>
            <img src={props.event.Event_flyer} className= "event-flyer" alt="" />
        </div>
        <div className= 'FlyerCard-content-container'>
            <h1 className='eventName'>{props.event.Name}</h1>
            <p> Description: <span className='description-content'>{props.event.Description}</span></p>
            <p> Date: <span>{props.event.Date}</span></p>
        </div>
    </div>
  )
}

export default EventFlyerCard