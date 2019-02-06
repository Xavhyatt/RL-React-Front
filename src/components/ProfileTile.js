import React, { Component } from 'react';

class ProfileTile extends Component {
    render() {
        return (
            <div class="col-sm-6">
            <div class="card">
                <h4 class="card-header bg-dark text-white">Miguel92
                <div class="float-right small">
                        <a class="btn btn-raised btn-danger" href="#" title="Ver perfil de Miguel92"
                            data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </a>
                        <a class="btn btn-raised btn-danger" href="#" title="Enviar mensaje">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                        <a class="btn btn-raised btn-danger" href="#" title="Seguir usuario">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </a>
                    </div>
                </h4>
                <div class="card-body">
                    <div class="image float-left user-l">
                        <img src="http://31.media.tumblr.com/tumblr_lw2lhqjrel1qfmi03o9_r1_500.gif" class="img-thumbnail"
                            alt="avatar" />
                    </div>
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                        facilis qui maiores quaerat perspiciatis? Non alias a iste similique ab nesciunt cum ad
                    tempore. Architecto dolore est explicabo deleniti porro.</p>
                </div>
            </div>
        </div>
        );
    }
}
export default ProfileTile;