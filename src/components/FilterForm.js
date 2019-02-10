import React, { Component } from 'react'

class filterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerFilter: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      playerFilter: e.target.value
    })
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div>
          <div className="jumbotron p-3 text-center">
        <label htmlFor="filter">Filter by Name:  </label>
        <input type="text" id="filter" 
          value={this.state.playerFilter} 
          onChange={this.handleChange}/>
      </div>
        </div>
      )
  }
}

export default filterForm