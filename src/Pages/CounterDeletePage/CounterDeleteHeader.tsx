import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import styles from './CounterDeleteHeader.module.scss';
import { withRouter, RouteComponentProps } from "react-router";
import HeaderText from "../../Components/HeaderText/HeaderText";

interface IProps extends RouteComponentProps<any> {}

interface IState {}

class CounterDeleteHeader extends Component<IProps, IState> {
  onBackButtonClicked = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className={styles.header}>
        <HeaderText className={styles.headerText}>Delete Counter</HeaderText>

        <Button id={styles.backBtn} onClick={this.onBackButtonClicked} circular icon>
          <Icon name="arrow left">
          </Icon>
        </Button>
      </div>
    )
  }
}

export default withRouter(CounterDeleteHeader);
