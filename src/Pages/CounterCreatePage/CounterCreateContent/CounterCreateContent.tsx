import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'semantic-ui-react';
import { BlockPicker } from 'react-color';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import CountersAPI from '../../../Interfaces/CountersAPI';
import styles from './CounterCreateContent.module.scss';
import LoggingAPI from '../../../Interfaces/LoggingAPI';

interface IProps extends RouteComponentProps<any> {
  id: number | undefined,
}

interface IState {
  name: string,
  color: string,
  valueString: string,
}

class CounterCreateContent extends Component<IProps, IState> {
  state = {
    name: '',
    color: 'red',
    valueString: '0',
  }

  componentDidMount() {
    if (this.props.id !== undefined) {
      CountersAPI.getCounterById(this.props.id).then(counter => {
        if (counter === undefined) {
          LoggingAPI.error('counter is undefined')
        } else {
          this.setState({
            name: counter.name,
            color: counter.color,
            valueString: counter.value.toString(),
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
    this.setState({ valueString: e.target.value })
  }

  isInputValid = () => {
    if (!this.state) {
      return false;
    } else if (!this.state.color || !this.state.name) {
      return false;
    } else if (isNaN(parseInt(this.state.valueString, 10)) || this.state.valueString.includes('.')) {
      return false;
    } else {
      return true;
    }
  }

  onSaveCounterClicked = () => {
    if (this.props.id === undefined) {
      CountersAPI.insertCounter({
        name: this.state.name,
        color: this.state.color,
        value: parseInt(this.state.valueString, 10),
      });
    } else {
      CountersAPI.insertCounter({
        id: this.props.id,
        name: this.state.name,
        color: this.state.color,
        value: parseInt(this.state.valueString, 10),
      });
    }

    this.props.history.push('/')
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
        <div id={styles.createContent} className={styles.content}>
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
                    value={this.state.valueString}>
                  </Input>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Button
            id={styles.saveCounterBtn}
            onClick={this.onSaveCounterClicked}
            disabled={this.isInputValid() === false}
            icon
            circular>
            <Icon name="save">
            </Icon>
          </Button>
        </div>
      </div>
    )
  }
}

export default withRouter(CounterCreateContent);
