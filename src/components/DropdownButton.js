import React, { Component } from 'react';
import {DropdownItem} from 'reactstrap';
import { BrowserRouter as Router, NavLink } from "react-router-dom";




class DropdownButton extends Component {
    // constructor(props){
    //     super(props)

    //     this.handleClick = (e) => {
    //         this.props.onClick(this.state);
    //         this.setState(teamId=element.teamId.toString());

    //     }

    //     this.state={
    //         teamId : ""
    //     }
    // }
 

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
                <DropdownItem key={element.teamId.toString()} >
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
