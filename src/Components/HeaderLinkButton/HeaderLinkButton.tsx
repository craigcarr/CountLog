import React from "react";
import styles from './HeaderLinkButton.module.scss';
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

interface IProps {
  className: any,
  iconName: SemanticICONS,
  route: string,
}

export default function HeaderLinkButton(props: IProps) {
  const history = useHistory();

  function onLinkButtonClicked() {
    history.push(props.route);
  }

  return (
    <Button
      className={`${styles.aboutBtn} ${props.className}`}
      circular
      icon
      onClick={onLinkButtonClicked}>
      <Icon name={props.iconName}>
      </Icon>
    </Button>
  );
}
