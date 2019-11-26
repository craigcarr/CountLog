import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import styles from './ColorPicker.module.scss';
import _ from "lodash";

interface IProps {
  color: string,
  onColorChange: any,
}

export default function ColorPicker(props: IProps) {
  const [selectedColor, setSelectedColor] = useState<string>(props.color);

  useEffect(() => {
    setSelectedColor(props.color);
  }, [props.color])

  let colors = [
    '#ff0000', // red
    '#ff9900', // orange
    '#bbbb00', // yellow
    '#00aa00', // green
    '#0000ff', // blue
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
