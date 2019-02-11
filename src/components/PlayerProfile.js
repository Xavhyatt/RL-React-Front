import React, { Component } from 'react';
import './css/popup.css';
// import PlayerNews from './PlayerNews';

class PlayerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: [],
            showNews: false
        } 

    }



 
    render() {
       
            return (

        
                
                    <div className="jumbotron p-3 text-center" >
                        <h4 className="display-4">{this.props.data.name} {this.props.data.surname}
                            <div className="float-centre small">
                                <button className="btn btn-raised btn-danger" 
                                    data-toggle="tooltip" data-placement="top" title="Tooltip on top"> Club History 
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                </button>
                                <button className="btn btn-raised btn-danger" title="Enviar mensaje"> Stats 
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </button>
                                <button className="btn btn-raised btn-danger" onClick={this.showNews} title="Seguir usuario"> News 
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </button>
                            </div>
                        </h4>
                        <div className="card-body">
                            <div className="image float-left user-l">
                                <img key={this.props.data.playerId.toString() + "pic"} src={this.props.data.pictureLink} className="img-thumbnail"
                                    alt="avatar" />
                            </div>
                            <h4 className="card-title" key={this.props.data.playerId.toString() + "position"}>{this.props.data.position}</h4>
                            <p className="card-text" key={this.props.data.playerId.toString() + "details"}>
                                Nationality: {this.props.data.nationality}<br />
                                Height (cm): {this.props.data.height}<br />
                                Weight (kg): {this.props.data.weight}<br />
                                Birthday:  {(this.props.data.birth).substring(0,10)}<br /></p>
                        </div>
                     
                    </div>
                   
          

            );   
    }
}
export default PlayerProfile;