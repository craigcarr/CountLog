import React from "react";
import styles from './HeaderText.module.scss';

interface IProps {
  className: string;
  children: any;
}

export default function HeaderText(props: IProps) {
  return <p className={`${styles.text} ${props.className}`}>{props.children}</p>;
}
