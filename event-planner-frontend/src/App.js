import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Register from './Components/Register'
import Login from './Components/Login';
import UserDashboard from './Components/UserDashboard';
import DashboardNav from './Components/DashboardNav';
import CreateEvent from './Components/CreateEvent';
import { useState } from 'react';


function App() {


  const [events, setEvents] = useState([]);
  
  const updateEvents = (event) =>{
    console.log(event);
    setEvents([...events,event]);
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/* <Route path="/" element={<DashboardNav/>}> */}
        <Route path="/user-dashboard" element={<UserDashboard events={events} />} />
        <Route path="/create-event" element={<CreateEvent updateEvents={updateEvents} />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
