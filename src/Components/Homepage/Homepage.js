import React, { Component } from "react";
import Detail from "../Details/Detail";
import Main from "../Main/Main";
import Sidenav from "../Sidenav/Sidenav";


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch("https://api.npoint.io/adf6676a313fa01f787d", {
      method: "GET",
    }).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          this.setState({
            data: result,
          });
        });
      }
    });
  };
  render() {
    return (
      <div>
        <Main data={this.state.data}/>
        <Sidenav/>
      </div>
    );
  }
}

export default Homepage;
