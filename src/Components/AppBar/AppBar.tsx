import React from 'react';
import HeaderText from '../HeaderText/HeaderText';
import styles from './AppBar.module.scss';

interface IProps {
  leading: any;
  title: string;
  trailing: any;
}

export default function AppBar(props: IProps) {
  return (
    <div className={styles.header}>
      <table>
        <tbody>
          <tr>
            <td className={styles.leading}>
              {props.leading.map((widget: any, index: number) => {
                return <div key={index}>
                  {widget}
                </div>
              })}
              <HeaderText className={styles.title}>{props.title}</HeaderText>
            </td>
            <td className={styles.trailing}>
              {props.trailing.map((widget: any, index: number) => {
                return <div key={index}>
                  {widget}
                </div>
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
