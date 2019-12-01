import React, { useState, useEffect, useContext } from 'react';
import { Table, Input, Button, Icon } from 'semantic-ui-react';
import styles from './CounterCreateContent.module.scss';
import ColorPicker from '../../../Components/ColorPicker/ColorPicker';
import { useHistory } from 'react-router';
import { CountersContext } from '../../../App';

interface IProps {
  id: number | undefined,
}

export default function CounterCreateContent(props: IProps) {
  const [name, setName] = useState<string>('');
  const [color, setColor] = useState<string>('#ff0000');
  const [valueString, setValueString] = useState<string>('0');

  const history = useHistory();

  const countersApi = useContext(CountersContext);

  useEffect(() => {
    if (props.id !== undefined) {
      countersApi.getCounterById(props.id).then(counter => {
        setName(counter.name);
        setColor(counter.color);
        setValueString(counter.value.toString());
      });
    }
  }, [props.id, countersApi]);

  function handleNameChange(e: any) {
    setName(e.target.value);
  }

  function handleColorChange(e: any) {
    setColor(e);
  }

  function handleValueChange(e: any) {
    setValueString(e.target.value);
  }

  function isInputValid() {
    if (!color || !name) {
      return false;
    } else if (isNaN(parseInt(valueString, 10)) || valueString.includes('.')) {
      return false;
    } else {
      return true;
    }
  }

  function handleSaveCounterClicked() {
    if (props.id === undefined) {
      countersApi.putCounter({
        name: name,
        color: color,
        value: parseInt(valueString, 10),
      });
    } else {
      countersApi.putCounter({
        id: props.id,
        name: name,
        color: color,
        value: parseInt(valueString, 10),
      });
    }

    history.push('/');
  }

  return (
    <div id={styles.createContent} className={styles.content}>
      <Table unstackable columns={2}>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              Name
                </Table.Cell>
            <Table.Cell>
              <Input defaultValue={name} onChange={handleNameChange}></Input>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Color
                </Table.Cell>
            <Table.Cell>
              <ColorPicker
                color={color}
                onColorChange={handleColorChange} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Initial Value
                </Table.Cell>
            <Table.Cell>
              <Input
                onChange={handleValueChange}
                type="number"
                value={valueString}>
              </Input>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Button
        id={styles.saveCounterBtn}
        onClick={handleSaveCounterClicked}
        disabled={isInputValid() === false}
        icon
        circular>
        <Icon name="save">
        </Icon>
      </Button>
    </div>
  );
}
