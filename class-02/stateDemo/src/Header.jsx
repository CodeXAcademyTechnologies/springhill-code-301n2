import { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand >
          <h1>{this.props.title}</h1>
        </Navbar.Brand>
      </Navbar>
    )
  }
}

export default Header;