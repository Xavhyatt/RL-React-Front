import React from 'react';
import logo from './img/rfl.jpg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
//   NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu} from 'reactstrap';
  import SearchBar from './Search';
  import DropdownButton from'./DropdownButton';
  import { BrowserRouter as Router, Route, Link } from "react-router-dom";
  import TeamProfile from './TeamProfile';

export default class MyNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      slTeams: [],
      cTeams: []    
    };
  }
  componentDidMount() {
    fetch('http://localhost:8090/api/league/9/team/')
    .then(response =>  response.json())
    .then(resData => {
      //  console.log(JSON.stringify(resData))
       //do your logic here       
       //let person = resData.results
       this.setState({ slTeams: resData }); //this is an asynchronous function
    })
    fetch('http://localhost:8090/api/league/10/team/')
    .then(response =>  response.json())
    .then(resData => {
      //  console.log(JSON.stringify(resData))
       //do your logic here       
       //let person = resData.results
       this.setState({ cTeams: resData }); //this is an asynchronous function
    })
    
}
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
      <div>
        <Navbar color="light" light expand="md">
          <img src={logo} alt="logo" height="75px"/>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.rugby-league.com/superleague/fixtures">Fixtures</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Super League
                </DropdownToggle>
                <DropdownMenu right>
                 <DropdownButton data={this.state.slTeams}/>
                </DropdownMenu> 
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Championship
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownButton data={this.state.cTeams}/>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <SearchBar/>
        </Navbar>
      </div>
      </Router>
    );
  }
}