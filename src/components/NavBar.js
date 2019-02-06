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
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import SearchBar from './Search';
  import DropdownButton from'./DropdownButton';

export default class MyNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      teams: [],
      teamNames: [
        "Huddersfield Giants",
        "Hull FC",
        "Hull KR"
      ]
    };
  }
  componentDidMount() {
    fetch('http://localhost:8090/api/team/')
    .then(response =>  response.json())
    .then(resData => {
      //  console.log(JSON.stringify(resData))
       //do your logic here       
       //let person = resData.results
       this.setState({ teams: resData.results }); //this is an asynchronous function
    })
}

// filterSubjects = (subjectFilter) => {
//   let filteredSubjects = this.state.subjects
//   filteredSubjects = filteredSubjects.filter((subject) => {
//     let subjectName = subject.name.toLowerCase()
//     return subjectName.indexOf(
//       subjectFilter.toLowerCase()) !== -1
//   })
//   this.setState({
//     filteredSubjects
//   })
// }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
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
                  {/* <DropdownButton data={this.state.teams}/> */}

                  {this.state.teams.map((club) => (
                    <DropdownItem>{club.toString()}</DropdownItem>
                  ))}

                  {/* <DropdownItem>
                  Catalan Dragons
                  </DropdownItem>
                  <DropdownItem>
                  Huddersfield Giants
                  </DropdownItem>
                  <DropdownItem>
                  Hull FC
                  </DropdownItem>
                  <DropdownItem>
                  Hull KR
                  </DropdownItem>
                  <DropdownItem>
                  Leeds Rhinos
                  </DropdownItem>
                  <DropdownItem>
                  London Broncos
                  </DropdownItem>
                  <DropdownItem>
                  Salford Red Devils
                  </DropdownItem>
                  <DropdownItem>
                  St Helens
                  </DropdownItem>
                  <DropdownItem>
                  Wakefield Trinity
                  </DropdownItem>
                  <DropdownItem>
                  Warrington Wolves
                  </DropdownItem>
                  <DropdownItem>
                  Wigan Warriors
                  </DropdownItem>*/}
                </DropdownMenu> 
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Championship
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Toronto Wolfpack
                  </DropdownItem>
                  <DropdownItem>
                    Bradford Bulls
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <SearchBar/>
        </Navbar>
      </div>
    );
  }
}