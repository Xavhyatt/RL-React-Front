import React, { Component } from 'react';
import Carousel from './MyCarousel';

class HomePage extends Component {
    render() {
        
        return (
            <div>
                <Carousel />  
                <h2 id="heading"> Latest Stories</h2>
            </div>
        );
    }
}

export default HomePage;