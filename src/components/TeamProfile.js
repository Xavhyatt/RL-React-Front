import React, { Component } from 'react';
import TeamProfileHead from './TeamProfileHead'
import ProfileTile from'./ProfileTile'


class TeamProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team: [],
            players:[],
            tId: this.props.location.state.teamId       
          }
        }
        componentDidMount() {   
 

            fetch('http://localhost:8090/api/team/'+this.state.tId+'/player')
            .then(response =>  response.json())
            .then(resData => {
              //  console.log(JSON.stringify(resData))
               //do your logic here       
               //let person = resData.results
               this.setState({ players: resData }); //this is an asynchronous function
            })
            
        

        fetch('http://localhost:8090/api/team/'+this.state.tId)
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
    shouldComponentUpdate(nextProps){
        // console.log(this.props.location.state.teamId);
        // console.log(nextProps.location.state.teamId);
        // console.log(this.props.location.state.teamId !== nextProps.location.state.teamId);
        if(this.props.location.state.teamId !== nextProps.location.state.teamId){
        this.setState({tId: nextProps.location.state.teamId}); 
        console.log(this.state.tId);
        console.log(nextProps.location.state.teamId);
        }

        }

 
}

export default TeamProfile;