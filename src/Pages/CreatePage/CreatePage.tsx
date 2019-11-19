import React, { Component } from 'react';
import CreateHeader from './CreateHeader';
import CreateContent from './CreateContent';

interface IProps {}

interface IState {}

class CreatePage extends Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <CreateHeader></CreateHeader>
        <CreateContent id={undefined}>
        </CreateContent>
      </React.Fragment>
    );
  }
}

export default CreatePage;
