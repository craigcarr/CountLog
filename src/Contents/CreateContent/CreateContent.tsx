import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'semantic-ui-react';
import { BlockPicker } from 'react-color';
import { Link } from 'react-router-dom';
import CountersAPI from '../../Interfaces/CountersAPI';
import './CreateContent.css';

type Props = {}

type State = {
  name: string,
  color: string,
  value: number,
}

class CreateContent extends Component<Props, State> {
  state = {
    name: '',
    color: 'red',
    value: 0,
  }

  handleNameChange = (e: any) => {
    this.setState({ name: e.target.value });
  }

  handleColorChange = (e: any) => {
    this.setState({ color: e.hex });
  }

  handleValueChange = (e: any) => {
    this.setState({ value: e.target.value})
  }

  isInputValid = () => {
    if (!this.state) {
      return false;
    } else if (!this.state.color || !this.state.name) {
      return false;
    } else if (this.state.value === undefined || this.state.value === null) {
      return false;
    } else {
      return true;
    }
  }

  onSaveCounterClicked = () => {
    CountersAPI.insertCounter({
      name: this.state.name,
      color: this.state.color,
      value: this.state.value});
  }

  colors = [
    'red',
    'orange',
    'yellow',
    'green',
    '#0000FF',
    'indigo',
    'violet',
    'black',
  ]

  render() {
    return (
      <div>
        <div id="createContent" className="content">
          <Table unstackable columns={2}>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  Name
                </Table.Cell>
                <Table.Cell>
                  <Input onChange={this.handleNameChange}></Input>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Color</Table.Cell>
                <Table.Cell>
                  <BlockPicker
                    color={this.state.color}
                    triangle="hide"
                    colors={this.colors}
                    onChangeComplete={this.handleColorChange} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Initial Value</Table.Cell>
                {/* TODO Better input validation. */}
                <Table.Cell>
                  <Input
                    onChange={this.handleValueChange}
                    type="number"
                    value={this.state.value}>
                  </Input>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Button onClick={this.onSaveCounterClicked} disabled={this.isInputValid() === false} icon circular id="saveCounterBtn">
            <Link to='/'>
              <Icon name="save">
              </Icon>
            </Link>
          </Button>
        </div>
      </div>
    )
  }
}

export default CreateContent;
