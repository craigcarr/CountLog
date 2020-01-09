import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

// Dummy test so that an example is present in the code base.
it('renders', () => {
  const component = <ColorPicker color="red" onColorChange={() => { /* do nothing */ }} />;
  const wrapper = shallow(component);
  expect(wrapper).toBeDefined();
});
