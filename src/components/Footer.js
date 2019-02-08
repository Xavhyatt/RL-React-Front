import React, { Component } from 'react';
import logo from './img/rfl.jpg';

class Footer extends Component {
    render() {
        
        return (
            <div>
                
               <img src={logo} alt="logo" height="75px"/>
             <h3 id="heading"> Footer </h3>
            </div>
        );
    }
}

export default Footer;