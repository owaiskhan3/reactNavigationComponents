import React, { Component } from "react";
import "../App.css";

class Pricing extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Pricing</h1>
        <div className="pricingdiv">
          <ul className="theplan">
            <li className="title">
              <b>2nd Place</b>
              <br />
              Herman Miler
            </li>
            <li>
              <b>Material:</b> All Mesh
            </li>
            <li>
              <b>Weight:</b> 55 lbs
            </li>
            <li>
              <b>Max Weight:</b> 330 lbs
            </li>
            <li>
              <b>Tilt Degrees:</b> 135
            </li>
            <li>
              <b>Tilt Degrees:</b> 135
            </li>
            <li>
              <b>Head Rest:</b> Yes
            </li>
            <li>
              <button className="btn btn-danger">Checkout</button>
            </li>
          </ul>
          <ul className="theplan">
            <li className="title">
              <b>1st Place</b>
              <br />
              Argomax Chair
            </li>
            <li>
              <b>Material:</b> Nylon w/ Breathable Glass Fiber
            </li>
            <li>
              <b>Weight:</b> 55 lbs
            </li>
            <li>
              <b>Max Weight:</b> 330 lbs
            </li>
            <li>
              <b>Head Rest:</b> Yes
            </li>
            <li>
              <b>Lumbar Support:</b> Yes
            </li>
            <li>
              <b>Arm Rest:</b> <span className="icon-check"></span>
            </li>
            <li>
              <b>Lumbar Support:</b> <span className="icon-check"></span>
            </li>
            <li>
              <b>Warranty:</b> 30 Days Money Back
            </li>
            <li>
              <b>Support:</b> 2 Years
            </li>
            <li>
              <button className="btn btn-danger">Checkout</button>
            </li>
          </ul>
          <ul className="theplan">
            <li className="title">
              <b>3rd Place</b>
              <br />
              Eurotech Mesh
            </li>
            <li className="ethighlight">
              <b>Dimensions:</b> 24.8W x 47.3H
            </li>
            <li>
              <b>Material:</b> Nylon w/ Breathable Glass Fiber
            </li>
            <li>
              <b>Weight:</b> 50 lbs
            </li>
            <li>
              <b>Max Weight:</b> 350 lbs
            </li>
            <li>
              <b>Head Rest:</b> Yes
            </li>
            <li>
              <b>Arm Rest:</b> <span className="icon-close"></span>
            </li>
            <li>
              <b>Warranty:</b> 30 Days Money Back
            </li>
            <li>
              <button className="btn btn-danger">Checkout</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Pricing;
