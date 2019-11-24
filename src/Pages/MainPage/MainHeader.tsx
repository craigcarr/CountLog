import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styles from './MainHeader.module.scss';
import HeaderText from "../../Components/HeaderText/HeaderText";

interface IProps extends RouteComponentProps<any> { }

interface IState { }

class MainHeader extends Component<IProps, IState> {
  onSettingsButtonClicked = () => {
    this.props.history.push('/settings')
  }

  render() {
    return (
      <div className={styles.header}>
        <HeaderText className={styles.headerText}>Active Counters</HeaderText>

        <Button circular icon id={styles.settingsBtn} onClick={this.onSettingsButtonClicked}>
          <Icon name="settings">
          </Icon>
        </Button>
      </div>
    );
  }
}

export default withRouter(MainHeader);
