import React, { Component } from 'react';
import AboutFooter from '../../Footers/AboutFooter/AboutFooter';
import CounterDatabase from '../../CounterDatabase';
import EditHeader from '../../Headers/EditHeader/EditHeader';
import EditContent from '../../Contents/EditContent/EditContent';

type Props = {
  db: CounterDatabase,
}

type State = {}

class EditPage extends Component<Props, State> {
  render() {
    return (
      <div>
        <EditHeader></EditHeader>
        <EditContent db={this.props.db}></EditContent>
        <AboutFooter></AboutFooter>
      </div>
    );
  }
}

export default EditPage;
