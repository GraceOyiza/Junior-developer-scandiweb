import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { BrowserRouter } from 'react-router-dom';
import VariantList from '../../components/VariantList';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = render(
    <BrowserRouter>
      <Provider store={store}>
        <VariantList />
      </Provider>
    </BrowserRouter>,
  );
});

describe('', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
