import React, { Component } from 'react';
import TeamProfileHead from './TeamProfileHead';
import FilterForm from './FilterForm';
import ProfileTile from './ProfileTile';



class TeamProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team: [],
            players: [],
            filteredPlayers: []
        };
    }

    filterPlayers = (playerFilter) => {
        fetch('http://localhost:8090/api/team/' + + this.props.teamId + '/player')
            .then(response => response.json())
            .then(resData => {
                //  console.log(JSON.stringify(resData))
                //do your logic here       
                //let person = resData.results
                this.setState({ players: resData }); //this is an asynchronous function
            })
        let filteredPlayers = this.state.players
        filteredPlayers = filteredPlayers.filter((player) => {
            let playerFName = player.name.toLowerCase();
            let playerSName = player.surname.toLowerCase();
            let playerName = playerFName + " " + playerSName;
            return playerName.indexOf(
                playerFilter.toLowerCase()) !== -1
        })
        this.setState({
            filteredPlayers
        })
    }

    componentDidMount() {
    


        fetch('http://localhost:8090/api/team/' + this.props.teamId + '/player')
            .then(response => response.json())
            .then(resData => {
                //  console.log(JSON.stringify(resData))
                //do your logic here       
                //let person = resData.results
                this.setState({ players: resData }); //this is an asynchronous function
            })



        fetch('http://localhost:8090/api/team/' + this.props.teamId)
            .then(response => response.json())
            .then(resData => {
                //console.log(JSON.stringify(resData))
                //do your logic here       
                //let person = resData.results
                this.setState({ team: resData }); //this is an asynchronous function
                // console.log(this.state.team)
            })
    }

    // shouldComponentUpdate(nextProps) {
    //     // console.log(this.props.location.state.teamId);
    //     // console.log(nextProps.location.state.teamId);
    //     // console.log(this.props.location.state.teamId !== nextProps.location.state.teamId);
    //     // if(this.props.location.state.teamId !== nextProps.location.state.teamId){

    //     // console.log(this.state.tId);
    //     // console.log(nextProps.location.state.teamId);
    //     // this.setState({tId: nextProps.location.state.teamId}); 
    //     // return true;
    //     const differentTeam = this.props.location.state.teamId !== nextProps.location.state.teamId;
    //     return differentTeam;
    // }

    render() {

        return (
            <div id="teamProfile">
                <div className="container"><br />
                    <TeamProfileHead teamData={this.state.team} />
                    <div className="jumbotron p-3 text-center">
                        <div className="card" >
                            <h4 className="card-header bg-dark text-white"> Team Roster </h4>
                            <FilterForm match={this.props.match} onChange={this.filterPlayers} />
                        </div>
                    </div>
                    <ProfileTile data={this.state.filteredPlayers} />

                </div>
            </div>


        );
    }
    // componentWillRecieveProps(nextProps){
    //     if (nextProps.location.state.teamId !== this.props.location.state.teamId){
    //         console.log("Hi");
    //         this.setState({tId:nextProps.location.state.teamId});
    //     }
    // }
}

export default TeamProfile;