import React from "react";
import styles from './HeaderLinkButton.module.scss';
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

interface IProps {
  className: string,
  iconName: SemanticICONS,
  route: string,
}

export default function HeaderLinkButton(props: IProps) {
  const history = useHistory();

  function handleLinkButtonClicked() {
    history.push(props.route);
  }

  return (
    <Button
      className={`${styles.aboutBtn} ${props.className}`}
      circular
      icon
      onClick={handleLinkButtonClicked}>
      <Icon name={props.iconName}>
      </Icon>
    </Button>
  );
}
