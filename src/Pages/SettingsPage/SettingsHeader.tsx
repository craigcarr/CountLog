import React, { Component } from "react";
import styles from './SettingsHeader.module.scss';
import { Button, Icon } from "semantic-ui-react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import HeaderText from "../../Components/HeaderText/HeaderText";

interface IProps extends RouteComponentProps<any> { }

interface IState { }

class SettingsHeader extends Component<IProps, IState> {
  onBackButtonClicked = () => {
    this.props.history.goBack()
  }

  onAboutButtonClicked = () => {
    this.props.history.push('/about')
  }

  render() {
    return (
      <div className={styles.header}>
        <HeaderText className={styles.headerText}>Settings</HeaderText>

        <Button id={styles.homeBtn} circular icon onClick={this.onBackButtonClicked}>
          <Icon name="arrow left">
          </Icon>
        </Button>

        <Button id={styles.aboutBtn} circular icon onClick={this.onAboutButtonClicked}>
          <Icon name="question">
          </Icon>
        </Button>
      </div>
    );
  }
}

export default withRouter(SettingsHeader);
