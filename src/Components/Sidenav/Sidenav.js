import React, { Component } from "react";
import "./style.css";
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';

class Sidenav extends Component {
  render() {
    return (
      <div id="sidenav">
        <div className="sectionOne">
          <div id="heading">
            <h5>ADSOUL</h5>
          </div>
          <div id="img"></div>
        </div>
        <div className="sectionTwo">
          <h1>Revenue Optimization</h1>
          <div id="iconsFirstLine">
            <div className="icon1">
              <img src={icon1} alt="Image"/>
              <p>File Rate</p>
            </div>
            <div className="icon2">
              <img src={icon2} alt="Image"/>
              <p>Imporve CTR</p>
            </div>
          </div>
          <div id='iconsSecondLine'>
            <div className="icon3">
              <img src={icon3} alt="Image"/>
              <p>Refresh Rate</p>
            </div>
            <div className="icon4">
              <img src={icon4} alt="Image"/>
              <p>Quick Integration</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidenav;
