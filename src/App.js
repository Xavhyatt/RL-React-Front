import React, { Component } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";




class App extends Component {
  constructor(){
    super();
    this.state = {
      teams: []
    }
  };
 

  render() {
    return (
<Router>
      <div className="App">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
      <Header/>
      <MainContent />
      <Footer />
    

            </div>
            </Router>
    );
  }
}

export default App;
