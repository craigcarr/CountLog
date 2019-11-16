import React, { Component } from 'react';
import CreateHeader from './CreateHeader';
import CreateContent from './CreateContent';

type Props = {}

type State = {}

class CreatePage extends Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <CreateHeader></CreateHeader>
        <CreateContent></CreateContent>
      </React.Fragment>
    );
  }
}

export default CreatePage;
