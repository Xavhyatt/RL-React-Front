import React, { Component } from 'react';
import Carousel from './MyCarousel';
import NewsMain from './NewsMain';

class HomePage extends Component {
    render() {
        
        return (
            <div>
                <Carousel />  
                <h2 id="heading"> Featured Stories</h2>
                <NewsMain />
            </div>
        );
    }
}

export default HomePage;