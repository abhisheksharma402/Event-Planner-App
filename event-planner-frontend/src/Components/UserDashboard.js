import React, {useState} from 'react'
import DashboardNav from './DashboardNav';
import { Outlet, Link, Route, Routes, Switch } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import EventCard from './EventCard';
import CreateEvent from './CreateEvent';

const UserDashboard = (props) => {

    // const location = useLocation();

    // console.log(location);

    console.log(props);

    // const [events,setEvents] = useState([]);


    // const postEvent = async (event)=>{
    //     const response = await fetch('http://localhost:3001/createEvent',{
    //         method: 'POST',
    //         mode: 'cors',
    //         cache: 'no-cache',
    //         credentials: 'same-origin',
    //         headers: {
    //         "Content-Type": "application/json",
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         redirect: "follow", // manual, *follow, error
    //         referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //         body: JSON.stringify(event)
    //     });

    //     return response.json();
    // }


    // const fetchEvent = async (e,event)=>{
    //     e.preventDefault();
    //     setEvents([...events,event]);

    //     const result = await postEvent(event);
    //     console.log(result);
    //     // if(Object.keys(result)[0]==="error") setError(result[Object.keys(result)[0]]);
    //     // else{
    //     //     setSuccess("Please Log in to continue");
    //     //     navigate('/login',result);
    //     //     clear();
    //     // }  

    // }



    return (
        <div className='container-fluid vh-100'>
            <div className='row'>
                <DashboardNav/>
                <div className='col-10 content'>
                    <div className='row'>
                        {
                            props.events.map((event)=><EventCard event={event}/>)
                        }
                        {/* {props.displayEvents()} */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserDashboard;