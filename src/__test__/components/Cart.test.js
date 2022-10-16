import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cart from '../../components/Cart';
import { Provider } from 'react-redux';
import store from '../../app/store';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For App', () => {
  it('should render button', () => {
    const wrapper = render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );
    const checkoutButton = wrapper.find('#checkout-button');
    expect(checkoutButton).toHaveLength(1);
  });
});
