import React, { Component } from 'react'
import axios from 'axios';
import DropdownButton from './DropdownButton';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`http://localhost:8090/api/findbyteamname/${this.state.query}`)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          results: data  // MusicGraph returns an object named data, 
                             // as does axios. So... data.data                             
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // if (this.state.query.length % 2 === 0) {
          this.getInfo()}
          if(this.state.query.length === 0 ){
            this.setState({results:[]});
          }
        //}
    })


    this.handleSubmit = (e) => {
      e.preventDefault();
    }
  }

  

  render() {
    return (
      <form  onSubmit={this.handleSubmit} >
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <DropdownButton  data={this.state.results} />
      </form>
    )
  }
}

export default Search
