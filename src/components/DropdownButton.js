import React, { Component } from 'react';
import {DropdownItem} from 'reactstrap';





class DropdownButton extends Component {
    render() {
        let menuItems = this.props.data.map((element) => {

            return (
                <DropdownItem key={element.teamId.toString()}>
                    {element.name}
                </DropdownItem>
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
