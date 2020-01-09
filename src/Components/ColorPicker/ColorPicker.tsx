import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import styles from './ColorPicker.module.scss';

interface IProps {
  color: string | undefined; // Probably should be `Colors | undefined`.
  onColorChange: any;
}

export enum Colors {
  red = '#ff0000',
  orange = '#ff9900',
  yellow = '#bbbb00',
  green = '#00aa00',
  blue = '#0000ff',
  purple = '#440088',
  black = '#000000',
}

export default function ColorPicker(props: IProps) {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(props.color);

  useEffect(() => {
    setSelectedColor(props.color);
  }, [props.color]);

  return (
    <div>
      {Object.values(Colors).map(color => {
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
            aria-label="Color"
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
