import React, { Component } from 'react';
import NavBar from './NavBar';
import './css/header.css';

class Header extends Component {
    constructor(props) {
        super(props)
        
      }

      handler2(team){
          this.props.handler(team)
       }
           
          
      

    render() {
        
        return (
           <div>
                <span className = "Headercontainer">
               {/* <img className = "logo" src={logo} alt="logo" height="75px"/> */}
               <NavBar handler={this.props.handler}/>
               {/* <SearchBar/> */}
               </span>
            </div>
            
        );
    }
}

export default Header;