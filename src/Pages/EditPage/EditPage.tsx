import React, { Component } from 'react';
import EditHeader from './EditHeader';
import EditContent from './EditContent';

type Props = {}

type State = {}

class EditPage extends Component<Props, State> {
  render() {
    return (
      <div>
        <EditHeader></EditHeader>
        <EditContent></EditContent>
      </div>
    );
  }
}

export default EditPage;
