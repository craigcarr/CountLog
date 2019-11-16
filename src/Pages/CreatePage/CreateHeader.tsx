import React, { Component } from 'react';
import './CreateHeader.css';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

class CreateHeader extends Component {
  render() {
    return (
      <div className="header">
        <p id="createHeaderText">Create Counter</p>

        <Link to="/">
          <Button icon circular id="cancelCounterBtn">
            <Icon name="cancel">
            </Icon>
          </Button>
        </Link>
      </div>
    )
  }
}

export default CreateHeader;
