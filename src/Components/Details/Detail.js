import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import arrow_left from "../assets/arrow_left.png";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      data: []
    };
  }

  componentDidMount() {
    if (this.props.match) {
      this.fetchAppDetail(this.props.match.params.id);
    }
  }

  fetchAppDetail = (id) => {
    fetch(`https://api.npoint.io/d734975d2aee62d197ef/${id}`, {
      method: "GET",
    }).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          this.setState({
            details: result,
          });
        });
      }
    });
  };

  render() {
      console.log()
    return (
      <>
        <nav id="nav">
          <h5>ADSOUL</h5>
        </nav>
        <div id="detailHeading">
          <Link to="/">
            <button id='btn'>
              <img src={arrow_left} alt="" />
            </button>
          </Link>
          <h1>{this.props.location.state.id}. {this.props.location.state.appName}</h1>                 
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <h5>Date</h5>
              </th>
              <th>
                <h5>Click</h5>
              </th>
              <th>
                <h5>Revenue</h5>
              </th>
              <th>
                <h5>Ad Request</h5>
              </th>
              <th>
                <h5>Ad Response</h5>
              </th>
              <th>
                <h5>Impression</h5>
              </th>
              <th>
                <h5>Render Rate</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.details.map((appDetails) => {
              return (
                <tr>
                  <td>{appDetails.date}</td>
                  <td>{appDetails.clicks}</td>
                  <td>{appDetails.revenue}</td>
                  <td>{appDetails.adRequest}</td>
                  <td>{appDetails.adResponse}</td>
                  <td>{appDetails.impressions}</td>
                  <td>
                    {(appDetails.impressions / appDetails.adResponse) * 100} %
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Detail;
