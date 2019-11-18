import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'semantic-ui-react';
import { BlockPicker } from 'react-color';
import { Link } from 'react-router-dom';
import CountersAPI from '../../Interfaces/CountersAPI';
import './CreateContent.css';

type Props = {
  id: number | undefined,
}

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

  componentDidMount() {
    if (this.props.id !== undefined) {
      CountersAPI.getCounterById(this.props.id).then(counter => {
        if (counter === undefined) {
          // TODO Do something
        } else {
          this.setState({
            name: counter.name,
            color: counter.color,
            value: counter.value,
          })
        }
      })
    }
  }

  handleNameChange = (e: any) => {
    this.setState({ name: e.target.value });
  }

  handleColorChange = (e: any) => {
    this.setState({ color: e.hex });
  }

  handleValueChange = (e: any) => {
    this.setState({ value: e.target.value })
  }

  isInputValid = () => {
    if (!this.state) {
      return false;
    } else if (!this.state.color || !this.state.name) {
      return false;
      // @ts-ignore
    } else if (isNaN(parseInt(this.state.value))) {
      return false;
    } else {
      return true;
    }
  }

  onSaveCounterClicked() {
    if (this.props.id === undefined) {
      CountersAPI.insertCounter({
        name: this.state.name,
        color: this.state.color,
        // @ts-ignore
        value: parseInt(this.state.value),
      });
    } else {
      CountersAPI.insertCounter({
        id: this.props.id,
        name: this.state.name,
        color: this.state.color,
        // @ts-ignore
        value: parseInt(this.state.value),
      });
    }
  }

  colors = [
    '#FF0000', // red
    '#FF9900', // orange
    '#CCCC00', // yellow
    '#00AA00', // green
    '#0000FF', // blue
    '#440088', // purple
    '#000000', // black
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
                  <Input defaultValue={this.state.name} onChange={this.handleNameChange}></Input>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Color
                </Table.Cell>
                <Table.Cell>
                  <BlockPicker
                    color={this.state.color}
                    triangle="hide"
                    colors={this.colors}
                    onChangeComplete={this.handleColorChange} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  Initial Value
                </Table.Cell>
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

          <Button
            id="saveCounterBtn"
            onClick={() => { this.onSaveCounterClicked() }}
            disabled={this.isInputValid() === false}
            icon
            circular>
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
