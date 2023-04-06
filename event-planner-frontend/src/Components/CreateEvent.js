import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardNav from './DashboardNav';

const CreateEvent = (props) => {

    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState({});


    // const loc = useLocation();

    // console.log(props);

    const updateEventName = (e) => {
        setEventName(e.target.value);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    }

    const updateDate = (e) => {
        setDate(e.target.value);
    }

    const updateLocation = (e) => {
        setLocation(e.target.value);
    }

    // const updateEvents = (ev)=>{
    //     setEvents([...events, event]);
    // }


    const postEvent = async ()=>{

        // console.log(events);

        const response = await fetch('http://localhost:3001/createEvent',{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                eventName: eventName,
                description: description,
                date: date,
                location: location
            })
        });

        return response.json();

    }

    const handle = async (e) => {
        e.preventDefault();

        props.updateEvents({
            eventName: eventName,
            description: description,
            date: date,
            location: location
        });

        const res = await postEvent();
        
    }


    return (

        <div className='container-fluid vh-100'>
            <div className='row'>
                <DashboardNav />
                <div className='col-10 content'>
                    <div className='row'>
                        <form onSubmit={handle}>
                            <div className="mb-3">
                                <label for="event-name" className="form-label">Event Name</label>
                                <input type="text" onChange={updateEventName} className="form-control" id="event-name" aria-describedby="eventHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Event Description</label>
                                <textarea type="text" onChange={updateDescription} className="form-control" id="description" />
                            </div>
                            <div className="mb-3">
                                <label for="date" className="form-label">Date</label>
                                <input type="date" onChange={updateDate} className="form-control" id="date" />
                            </div>

                            <div className="mb-3">
                                <label for="location" className="form-label">Event Location</label>
                                <input type="text" onChange={updateLocation} className="form-control" id="location" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateEvent;