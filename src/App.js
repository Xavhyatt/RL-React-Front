import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/MyCarousel';

import './App.css';
import TeamProfile from './components/TeamProfile';



class App extends Component {
  constructor(){
    super();
    this.state = {
      teams: []
    }
  };
 

  render() {
    return (
      <div className="App">
      
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
      <NavBar />
      <Carousel />   
     <TeamProfile />
            </div>
    );
  }
}

export default App;
