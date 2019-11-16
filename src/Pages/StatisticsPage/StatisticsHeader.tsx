import React, { Component } from "react";
import './StatisticsHeader.css';
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

class StatisticsHeader extends Component {
  render() {
    return (
      <div className="header">
        <p id="statisticsHeaderText">Counter Statistics</p>

        <Link to="/">
          <Button id="homeBtn" circular icon>
            <Icon name="arrow left">
            </Icon>
          </Button>
        </Link>
      </div>
    );
  }
}

export default StatisticsHeader;
