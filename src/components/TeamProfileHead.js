import React, { Component } from 'react';

class TeamProfileHead extends Component {
    render() {

        
        return (
            <div className="jumbotron p-3 text-center" key={this.props.teamData.teamId} >
                    <h1 id="teamName" className="display-4">{this.props.teamData.name}</h1>

                    <div>
                        <img id="teamLogo" src={this.props.teamData.logoLink} className="img-thumbnail"
                            alt="avatar" />
                    </div>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href={this.props.teamData.website} role="button">Official Website</a>
                    </p>
                    <p className="lead"> Location: {this.props.teamData.location}</p>
                <p className="lead"> Ground: {this.props.teamData.groundName}</p>
                    <p className="lead"> Kit Colours: {this.props.teamData.colours}</p>
                    <p className="lead"> Founded: {this.props.teamData.founded}</p>

                    </div>
        );
    }
}
export default TeamProfileHead;