import React, { Component } from 'react';
import NavBar from './NavBar';
import './css/header.css';

class Header extends Component {
    render() {
        
        return (
           <div>
                <span className = "Headercontainer">
               {/* <img className = "logo" src={logo} alt="logo" height="75px"/> */}
               <NavBar />
               {/* <SearchBar/> */}
               </span>
            </div>
            
        );
    }
}

export default Header;