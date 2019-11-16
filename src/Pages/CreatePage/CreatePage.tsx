import React, { Component } from 'react';
import CreateHeader from '../../Headers/CreateHeader/CreateHeader';
import CreateContent from '../../Contents/CreateContent/CreateContent';
import './CreatePage.css';

type Props = {}

type State = {}

class CreatePage extends Component<Props, State> {
  render() {
    return (
      <div>
        <CreateHeader></CreateHeader>
        <CreateContent></CreateContent>
      </div>
    );
  }
}

export default CreatePage;
