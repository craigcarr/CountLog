import React, { Component } from 'react';
import { Table, Checkbox, } from 'semantic-ui-react';
import './SettingsContent.css';

class SettingsContent extends Component {
  render() {
    return (
      <div className="content">
        <Table unstackable columns={2}>
          <Table.Body>
          <Table.Row>
              <Table.Cell>Dark Mode</Table.Cell>
              <Table.Cell>
                <Checkbox disabled toggle></Checkbox>
                <p>Not yet supported!</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Click Sound
                </Table.Cell>
              <Table.Cell>
                <Checkbox disabled toggle></Checkbox>
                <p>Not yet supported!</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Vibration</Table.Cell>
              <Table.Cell>
                <Checkbox toggle onChange={() => window.navigator.vibrate(200)}></Checkbox>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Screen Always On</Table.Cell>
              <Table.Cell>
                <Checkbox disabled toggle></Checkbox>
                <p>Not yet supported!</p>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default SettingsContent;
