import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron
          style={{ margin: 0, backgroundColor: "#2f3857", borderRadius: 0 }}
        >
          <h1 style={{ color: "white" }}>Homepage</h1>
        </Jumbotron>
        <img
          src="https://images.unsplash.com/photo-1563546774646-a7be8e87dd23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          style={{ margin: 0 }}
        />
      </div>
    );
  }
}

export default Home;
