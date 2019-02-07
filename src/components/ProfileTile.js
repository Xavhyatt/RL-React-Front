import React, { Component } from 'react';

class ProfileTile extends Component {
    render() {
        let tile = this.props.data.map((element) => {
            return (
                
                <div className="col-sm-6">
                    <div className="card" key={element.playerId.toString()}>
                        <h4 className="card-header bg-dark text-white">{element.name} {element.surname}
                            {/* <div className="float-right small">
                                <a className="btn btn-raised btn-danger" title="Ver perfil de Miguel92"
                                    data-toggle="tooltip" data-placement="top" title="Tooltip on top"> 1 
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                </a>
                                <a className="btn btn-raised btn-danger" title="Enviar mensaje"> 2 
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </a>
                                <a className="btn btn-raised btn-danger"  title="Seguir usuario"> 3 
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </a>
                            </div> */}
                        </h4>
                        <div className="card-body">
                            <div className="image float-left user-l">
                                <img src={element.pictureLink} className="img-thumbnail"
                                    alt="avatar" />
                            </div>
                            <h4 className="card-title">{element.position}</h4>
                            <p className="card-text">
                                <p className="lead"> Nationality: {element.nationality}</p>
                                <p className="lead"> Height (cm): {element.height}</p>
                                <p className="lead"> Weight (kg): {element.weight}</p>
                                <p className="lead"> Birthday:  {element.birth}</p></p>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                {tile}
            </div >
        );
    }
}
export default ProfileTile;