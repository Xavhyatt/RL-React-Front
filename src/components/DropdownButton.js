import React, { Component } from 'react';
import {DropdownItem} from 'reactstrap';
import { BrowserRouter as Router, NavLink } from "react-router-dom";




class DropdownButton extends Component {
     constructor(props){
         super(props)
     }


    handleClick (e)  {
       this.props.handler(e);
    }
 

    render() {
         let menuItems = this.props.data.map((element) => {
             let teampathname = "/teamprofile/" + element.teamId.toString();
             let thisteamId = element.teamId.toString();
            return (

                    <NavLink to={{
                        pathname: teampathname,
                        state:{
                           teamId: thisteamId
                        }
                    }}>
                <DropdownItem type="button"
                 key={element.teamId.toString()} id={element.teamId.toString()} onClick={() => {this.handleClick(element.teamId)}} >
                {element.name}
                </DropdownItem>
                </NavLink>
              
            );
         });

        return (
            <div>
                {menuItems}
            </div>
        )
    }
}
export default DropdownButton;
