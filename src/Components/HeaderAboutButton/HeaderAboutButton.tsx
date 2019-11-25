import React from "react";
import styles from './HeaderAboutButton.module.scss';
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

interface IProps {
  className: any,
}

export default function HeaderAboutButton(props: IProps) {
  let history = useHistory();

  function onAboutButtonClicked() {
    history.push('/about');
  }

  return (
    <Button
      className={`${styles.aboutBtn} ${props.className}`}
      circular
      icon
      onClick={onAboutButtonClicked}>
      <Icon name="question">
      </Icon>
    </Button>
  );
}
