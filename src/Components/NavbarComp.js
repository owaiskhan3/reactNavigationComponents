import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import Features from "./Features";
import Pricing from "./Pricing";

class NavbarComp extends Component {
  state = {
    current: "Home"
  };
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto" target="_blank">
            <Nav.Link
              href=""
              onClick={() => this.setState({ current: "Home" })}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href=""
              onClick={() => this.setState({ current: "Features" })}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href=""
              onClick={() => this.setState({ current: "Pricing" })}
            >
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar>
        <div> {this.state.current === "Home" ? <Home /> : null} </div>
        <div> {this.state.current === "Features" ? <Features /> : null} </div>
        <div> {this.state.current === "Pricing" ? <Pricing /> : null} </div>
      </div>
    );
  }
}

export default NavbarComp;
