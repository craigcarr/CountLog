import React, { Component } from "react";
import styles from './StatisticsHeader.module.scss';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import HeaderText from "../../Components/HeaderText/HeaderText";

interface IProps extends RouteComponentProps<any> { }

interface IState { }

class StatisticsHeader extends Component<IProps, IState> {
  onBackButtonClicked = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className={styles.header}>
        <HeaderText className={styles.headerText}>Counter Statistics</HeaderText>

        <Button id={styles.homeBtn} circular icon onClick={this.onBackButtonClicked}>
          <Icon name="arrow left">
          </Icon>
        </Button>
      </div>
    );
  }
}

export default withRouter(StatisticsHeader);
