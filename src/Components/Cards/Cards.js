import React, { Component } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "./style.css";

class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="card">
        {this.props.data.map((appData) => {
          return (
            <div id="mainContent">
              <Link to={{
                  pathname: `/details/${appData.id}`,
                  state: appData
                }}>
                <button id="arrowBtn">
                  <img src={arrow} alt="Arrow" />
                </button>
              </Link>
              <h1>{appData.appName}</h1>
              <p>{appData.publisherName}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
