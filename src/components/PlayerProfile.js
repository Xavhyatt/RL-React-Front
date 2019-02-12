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
        console.log(this.props.profile)
    }


componentDidMount(){
    fetch('http://localhost:8090/api/player/' + this.props.profile)
    .then(response => response.json())
    .then(resData => {
        console.log(JSON.stringify(resData))
        //do your logic here       
        //let person = resData.results
        this.setState({ player: resData }); //this is an asynchronous function
        console.log(this.props)
    })
}
 
    render() {
       
            return (

        
                
                    <div className="jumbotron p-3 text-center" >
                         <h4 className="display-4">{this.state.player.name} {this.state.player.surname}
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
                                <img  src={this.state.player.pictureLink} className="img-thumbnail"
                                    alt="avatar" />
                            </div>
                            <h4 className="card-title" >{this.state.player.position}</h4>
                            <p className="card-text" >
                                Nationality: {this.state.player.nationality}<br />
                                Height (cm): {this.state.player.height}<br />
                                Weight (kg): {this.state.player.weight}<br />
                                Birthday:  {(this.state.player.birth)}<br /></p>
                        </div>
                      
                    </div>
                   
          

            );   
    }
}
export default PlayerProfile;