import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import './MainHeader.css';

class MainHeader extends Component {
  render() {
    return (
      <div className="header">
        <p id="mainHeaderText">Active Counters</p>

        <Link to="/settings">
          <Button circular icon id="settingsBtn">
            <Icon name="settings">
            </Icon>
          </Button>
        </Link>
      </div>
    );
  }
}

export default MainHeader;
