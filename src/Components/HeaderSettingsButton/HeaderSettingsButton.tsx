import React from "react";
import styles from './HeaderSettingsButton.module.scss';
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

interface IProps {
  className: any,
}

export default function HeaderSettingsButton(props: IProps) {
  let history = useHistory();

  function onSettingsButtonClicked() {
    history.push('/settings');
  }

  return (
    <Button
      className={`${styles.settingsBtn} ${props.className}`}
      circular
      icon
      onClick={onSettingsButtonClicked}>
      <Icon name="settings">
      </Icon>
    </Button>
  );
}
