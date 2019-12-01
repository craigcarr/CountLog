import React from "react";
import styles from './HeaderBackButton.module.scss';
import { Button, Icon, SemanticICONS } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

interface IProps {
  className: any,
  iconName: SemanticICONS,
}

export default function HeaderBackButton(props: IProps) {
  const history = useHistory();

  function handleBackButtonClicked() {
    history.goBack();
  }

  return (
    <Button
      className={`${styles.backBtn} ${props.className}`}
      circular
      icon
      onClick={handleBackButtonClicked}>
      <Icon name={props.iconName}>
      </Icon>
    </Button>
  );
}
