import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// https://airbnb.io/enzyme/docs/guides/jest.html
configure({ adapter: new Adapter() });
