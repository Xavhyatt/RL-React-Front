import React, { Component } from 'react';
import TeamProfileHead from './TeamProfileHead'
import ProfileTile from'./ProfileTile'


class TeamProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team: [],
            players:[]         
          }
        }
        componentDidMount() {
            
            fetch('http://localhost:8090/api/team/23/player')
            .then(response =>  response.json())
            .then(resData => {
            //    console.log(JSON.stringify(resData))
               //do your logic here       
               //let person = resData.results
               this.setState({ players: resData }); //this is an asynchronous function
            })
        

        fetch('http://localhost:8090/api/team/23')
        .then(response =>  response.json())
        .then(resData => {
            //console.log(JSON.stringify(resData))
           //do your logic here       
           //let person = resData.results
           this.setState({ team: resData }); //this is an asynchronous function
        })
    }


    render() {
        return (
            <div id="teamProfile">
            <div className="container"><br/>
                <TeamProfileHead teamData={this.state.team}/>

                <div className="row">
                

                   <ProfileTile data={this.state.players}/>
                           
                           </div>
                </div>
                
            </div>
        );
    }
}

export default TeamProfile;