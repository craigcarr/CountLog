import React, { Component } from "react";
import './SettingsHeader.css';
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class SettingsHeader extends Component {
  render() {
    return (
      <div className="header">
        <p id="settingsHeaderText">Settings</p>

        <Link to="/">
          <Button id="homeBtn" circular icon>
            <Icon name="arrow left">
            </Icon>
          </Button>
        </Link>

        <Link to="/about">
          <Button id="aboutBtn" circular icon>
            <Icon name="question">
            </Icon>
          </Button>
        </Link>
      </div>
    );
  }
}

export default SettingsHeader;
