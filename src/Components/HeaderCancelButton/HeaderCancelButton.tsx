import React from "react";
import styles from './HeaderCancelButton.module.scss';
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

interface IProps {
  className: any,
}

export default function HeaderCancelButton(props: IProps) {
  let history = useHistory();

  function onBackButtonClicked() {
    history.goBack();
  }

  return (
    <Button
      className={`${styles.backBtn} ${props.className}`}
      circular
      icon
      onClick={onBackButtonClicked}>
      <Icon name="cancel">
      </Icon>
    </Button>
  );
}
