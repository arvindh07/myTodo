import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='nav'>
        <a href="#" className="logo">myTodo</a>
        <div className="icons">
            <PersonPinIcon/>
            <LogoutIcon/>
        </div>
    </nav>
  )
}

export default Navbar