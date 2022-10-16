import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { BrowserRouter } from 'react-router-dom';
import CartItem from '../../components/CartItem';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let cartItem = {
  __typename: 'Product',
  id: 'ps-5',
  name: 'PlayStation 5',
  description:
    '<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>',
  inStock: false,
  gallery: [
    'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg',
  ],
  brand: 'Sony',
  prices: [
    {
      __typename: 'Price',
      currency: {
        __typename: 'Currency',
        label: 'USD',
        symbol: '$',
      },
      amount: 844.02,
    },
    {
      __typename: 'Price',
      currency: {
        __typename: 'Currency',
        label: 'GBP',
        symbol: '£',
      },
      amount: 606.67,
    },
    {
      __typename: 'Price',
      currency: {
        __typename: 'Currency',
        label: 'AUD',
        symbol: 'A$',
      },
      amount: 1088.79,
    },
    {
      __typename: 'Price',
      currency: {
        __typename: 'Currency',
        label: 'JPY',
        symbol: '¥',
      },
      amount: 91147.25,
    },
    {
      __typename: 'Price',
      currency: {
        __typename: 'Currency',
        label: 'RUB',
        symbol: '₽',
      },
      amount: 63826.91,
    },
  ],
  attributes: [
    {
      __typename: 'AttributeSet',
      id: 'Color',
      name: 'Color',
      type: 'swatch',
      items: [
        {
          __typename: 'Attribute',
          displayValue: 'Green',
          value: '#44FF03',
          id: 'Green',
        },
        {
          __typename: 'Attribute',
          displayValue: 'Cyan',
          value: '#03FFF7',
          id: 'Cyan',
        },
        {
          __typename: 'Attribute',
          displayValue: 'Blue',
          value: '#030BFF',
          id: 'Blue',
        },
        {
          __typename: 'Attribute',
          displayValue: 'Black',
          value: '#000000',
          id: 'Black',
        },
        {
          __typename: 'Attribute',
          displayValue: 'White',
          value: '#FFFFFF',
          id: 'White',
        },
      ],
    },
    {
      __typename: 'AttributeSet',
      id: 'Capacity',
      name: 'Capacity',
      type: 'text',
      items: [
        {
          __typename: 'Attribute',
          displayValue: '512G',
          value: '512G',
          id: '512G',
        },
        {
          __typename: 'Attribute',
          displayValue: '1T',
          value: '1T',
          id: '1T',
        },
      ],
    },
  ],
  quantity: 1,
};

beforeEach(() => {
  wrapper = render(
    <BrowserRouter>
      <Provider store={store}>
        <CartItem cartItem={cartItem} />
      </Provider>
    </BrowserRouter>,
  );
});

describe('', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
