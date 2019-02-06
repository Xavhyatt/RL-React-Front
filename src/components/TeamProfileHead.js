import React, { Component } from 'react';

class TeamProfileHead extends Component {
    render() {
        return (
            <div class="jumbotron p-3 text-center">
                    <h1 id="teamName" class="display-4">Team Profile Page</h1>

                    <div>
                        <img id="teamLogo" src="http://31.media.tumblr.com/tumblr_lw2lhqjrel1qfmi03o9_r1_500.gif" class="img-thumbnail"
                            alt="avatar" />
                    </div>
                    <p class="lead"> Team Website: <a href="https://bootsnipp.com/snippets/qrg6B" target="_blank">Go</a></p>
                    <p class="lead"> Location: </p>
                    <p class="lead"> Ground: </p>
                    <p class="lead"> Kit Colours: </p>
                    <p class="lead"> Founded: </p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>

                </div>
        );
    }
}
export default TeamProfileHead;