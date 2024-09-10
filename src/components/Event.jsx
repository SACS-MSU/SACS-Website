import React from 'react'

const Event = ({name,location,date,time}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{location}</p>
        <p>{date}</p>
        <p>{time}</p>
    </div>
  )
}

export default Event