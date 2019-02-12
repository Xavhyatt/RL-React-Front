import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import wrl from './img/wrl1.jpg';
import RugbyLeague from './img/Rugbyleague1.jpg';
import MakinsonImg from './img/makinson.jpg';
import './css/carousel.css';
 
class DemoCarousel extends Component {
    render() {
        return (
            <div className="carousel_container">
            <Carousel className="test">
                <div className="newCarousel">
                    <img src= {RugbyLeague} />
                    <p className="legend">Super League Returns 31st January!</p>
                </div>
                <div>
                    <img src={wrl} />
                    <p className="legend">Women's State of Origin June 2019</p>
                </div>
                {/* <div>
                    <img src={MakinsonImg} />
                    <p id="test" className="legend">Legend 3</p>
                </div> */}
            </Carousel>
            </div>
        );
    }

}

export default DemoCarousel;
