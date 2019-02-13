import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import TeamProfile from './TeamProfile';




class MainContent extends Component {
    render() {

        return (
           
  
                <div>
                    
                        <Route exact path='/' component={HomePage}  />
                        {/* <Route path='/fixtures' component={HomePage}  /> */}
                        <Route path='/:teamprofile' component={() => <TeamProfile teamId={this.props.teamId} />}  />
                    
                </div>

           
        );
    }
}

export default MainContent;

