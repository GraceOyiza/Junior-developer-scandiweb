import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopCart from '../../components/PopCart';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <Provider store={store}>
          <PopCart />
        </Provider>
      </BrowserRouter>,
    );
});

describe('',  () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
     
})