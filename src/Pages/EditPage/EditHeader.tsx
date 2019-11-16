import React, { Component } from "react";
import './EditHeader.css';
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

class EditHeader extends Component {
  render() {
    return (
      <div className="header">
        <p id="editHeaderText">Edit Counter</p>

        <Link to="/">
          <Button circular icon id="settingsBtn">
            <Icon name="settings">
            </Icon>
          </Button>
        </Link>
      </div>
    )
  }
}

export default EditHeader;
