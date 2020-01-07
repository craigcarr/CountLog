import React from "react";
import styles from "./TooltipButton.module.scss";
import { Button, Icon } from "semantic-ui-react";

interface IProps {
  text: string;
}

export default function TooltipButton(props: IProps) {
  return (
    <Button icon circular className={styles.tooltip} aria-label="Tooltip">
      <Icon name="question"></Icon>
      <span className={styles.tooltiptext}>{props.text}</span>
    </Button>
  );
}
