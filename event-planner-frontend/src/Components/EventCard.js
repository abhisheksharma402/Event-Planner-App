import React from 'react'

const EventCard = (props) => {
    return (
        <div className='col-lg-2 col-md-5 border event-card'>
            <h3>{props.event.eventName}</h3>
            <div>
                <h6>Description</h6>
                <p>{props.event.description}</p>
            </div>
            <div>
                <h6>Time</h6>
                <p>{props.event.date}</p>
            </div>
            <div>
                <h6>Location</h6>
                <p>{props.event.location}</p>
            </div>
        </div>
    )
}

export default EventCard