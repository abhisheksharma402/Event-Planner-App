import React from 'react'
import CreateEvent from './CreateEvent'
import UserDashboard from './UserDashboard'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const DashboardNav = () => {


    const [events,setEvents] = useState([]);

    const postEvent = async (event)=>{
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
            body: JSON.stringify(event)
        });

        return response.json();
    }

    const fetchEvent = async (e,event)=>{
        e.preventDefault();
        setEvents([...events,event]);

        const result = await postEvent(event);
        console.log(result);
        // if(Object.keys(result)[0]==="error") setError(result[Object.keys(result)[0]]);
        // else{
        //     setSuccess("Please Log in to continue");
        //     navigate('/login',result);
        //     clear();
        // }  

    }


    const callCreateEvent = ()=>{
        return (
            <CreateEvent handle={fetchEvent}/>
        )
    }

    const callDashboard = ()=>{
        return(
            <UserDashboard/>
        )
    }

    return (
        <div className='position-fixed col-2'>
            <nav className='navbar navbar-light d-flex flex-column align-items-start'>
                <a className="navbar-brand" href="#">Logo</a>
                <ul className='navbar-nav d-flex flex-column'>
                    <li className='nav-item'>
                        <Link to='/user-dashboard'>Dashboard</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/create-event'>Create Event</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default DashboardNav