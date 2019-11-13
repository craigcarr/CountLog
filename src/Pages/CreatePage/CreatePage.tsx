import React, { Component } from 'react';
import CreateHeader from '../../Headers/CreateHeader/CreateHeader';
import AboutFooter from '../../Footers/AboutFooter/AboutFooter';
import CreateContent from '../../Contents/CreateContent/CreateContent';
import './CreatePage.css';
import CounterDatabase from '../../CounterDatabase';

type Props = {
  db: CounterDatabase,
}

type State = {}

class CreatePage extends Component<Props, State> {
  render() {
    return (
      <div>
        <CreateHeader></CreateHeader>
        <CreateContent db={this.props.db}></CreateContent>
        <AboutFooter></AboutFooter>
      </div>
    );
  }
}

export default CreatePage;
