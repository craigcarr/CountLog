import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import './AboutHeader.css';

class AboutHeader extends Component {
  render() {
    return (
      <div className="header">
        <p id="aboutHeaderText">About CountLog</p>

        <Link to="/settings">
          <Button icon circular id="backBtn">
            <Icon name="arrow left">
            </Icon>
          </Button>
        </Link>
      </div>
    )
  }
}

export default AboutHeader;
