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

  // componentDidMount(){
  //   fetch('http://localhost:8090/api/team/')
  //   .then(results => {
  //     return results.json();
  //   }).then(data => {
  //     let teams = data.results.map((name) => {
  //       <div key={name.results}>
  //       <button> </button>
  //       </div>
  //     })

  //   }

  

   

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
