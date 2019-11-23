import React from "react";
import styles from './HeaderText.module.scss';

interface IProps {
  className: any,
  children: any,
}

function HeaderText(props: IProps) {
  return <p className={`${styles.text} ${props.className}`}>{props.children}</p>;
}

export default HeaderText;
