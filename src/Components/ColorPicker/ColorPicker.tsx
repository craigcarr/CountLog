import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import styles from './ColorPicker.module.scss';
import _ from "lodash";

interface IProps {
  onColorChange: any,
}

export default function ColorPicker(props: IProps) {
  const [selectedColor, setSelectedColor] = useState('#FF0000');

  let colors = [
    '#FF0000', // red
    '#FF9900', // orange
    '#CCCC00', // yellow
    '#00AA00', // green
    '#0000FF', // blue
    '#440088', // purple
    '#000000', // black
  ]

  return (
    <div>
      {_.map(colors, (color) => {
        let myStyle = null;

        if (color === selectedColor) {
          myStyle = {
            backgroundColor: color,
            opacity: 1.0,
            borderColor: 'black',
          }
        } else {
          myStyle = {
            backgroundColor: color,
            opacity: 0.5,
            borderColor: 'white',
          }
        }

        return (
          <Button
            key={color}
            style={myStyle}
            onClick={e => {setSelectedColor(color); props.onColorChange(color)}}
            className={styles.colorPickerButton}>
          </Button>
        );
      })}
    </div>
  );
}
