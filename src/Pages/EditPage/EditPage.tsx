import React, { Component } from 'react';
import EditHeader from '../../Headers/EditHeader/EditHeader';
import EditContent from '../../Contents/EditContent/EditContent';

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
