import React, { Component } from 'react';
import TeamProfileHead from './TeamProfileHead'
import ProfileTile from'./ProfileTile'


class TeamProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: []           
          }
        }
        componentDidMount() {
            fetch('http://localhost:8090/api/team/')
            .then(response =>  response.json())
            .then(resData => {
               console.log(JSON.stringify(resData))
               //do your logic here       
               //let person = resData.results
               this.setState({ teams: resData.results }); //this is an asynchronous function
            })
        }


    render() {
        return (
            <div id="teamProfile">
                <TeamProfileHead />

                <div class="row">

                   <ProfileTile />
                   <ProfileTile />              

                </div>
                
            </div>
        );
    }
}

export default TeamProfile;