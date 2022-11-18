import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Category from '../../components/Category';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { BrowserRouter } from 'react-router-dom';


Enzyme.configure({ adapter: new Adapter() });

let wrapper;

const currentCategory = {
      name: 'all',
      products: [
        {
          __typename: 'Product',
          id: 'huarache-x-stussy-le',
          name: 'Nike Air Huarache Le',
          inStock: true,
          gallery: [
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087',
            'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087'
          ],
          brand: 'Nike x Stussy',
          prices: [
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'USD',
                symbol: '$'
              },
              amount: 144.69
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'GBP',
                symbol: '£'
              },
              amount: 104
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'AUD',
                symbol: 'A$'
              },
              amount: 186.65
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'JPY',
                symbol: '¥'
              },
              amount: 15625.24
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'RUB',
                symbol: '₽'
              },
              amount: 10941.76
            }
          ],
          attributes: [
            {
              __typename: 'AttributeSet',
              id: 'Size',
              name: 'Size',
              type: 'text',
              items: [
                {
                  __typename: 'Attribute',
                  displayValue: '40',
                  value: '40',
                  id: '40'
                },
                {
                  __typename: 'Attribute',
                  displayValue: '41',
                  value: '41',
                  id: '41'
                },
                {
                  __typename: 'Attribute',
                  displayValue: '42',
                  value: '42',
                  id: '42'
                },
                {
                  __typename: 'Attribute',
                  displayValue: '43',
                  value: '43',
                  id: '43'
                }
              ]
            }
          ]
        },
        {
          __typename: 'Product',
          id: 'jacket-canada-goosee',
          name: 'Jacket',
          inStock: true,
          gallery: [
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg',
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg',
            'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png',
            'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png'
          ],
          brand: 'Canada Goose',
          prices: [
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'USD',
                symbol: '$'
              },
              amount: 518.47
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'GBP',
                symbol: '£'
              },
              amount: 372.67
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'AUD',
                symbol: 'A$'
              },
              amount: 668.83
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'JPY',
                symbol: '¥'
              },
              amount: 55990.46
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'RUB',
                symbol: '₽'
              },
              amount: 39207.96
            }
          ],
          attributes: [
            {
              __typename: 'AttributeSet',
              id: 'Size',
              name: 'Size',
              type: 'text',
              items: [
                {
                  __typename: 'Attribute',
                  displayValue: '40',
                  value: '40',
                  id: '40'
                },
                {
                  __typename: 'Attribute',
                  displayValue: '41',
                  value: '41',
                  id: '41'
                },
                {
                  __typename: 'Attribute',
                  displayValue: '42',
                  value: '42',
                  id: '42'
                },
                {
                  __typename: 'Attribute',
                  displayValue: '43',
                  value: '43',
                  id: '43'
                }
              ]
            }
          ]
        },
        {
          __typename: 'Product',
          id: 'ps-5',
          name: 'PlayStation 5',
          inStock: false,
          gallery: [
            'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg'
          ],
          brand: 'Sony',
          prices: [
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'USD',
                symbol: '$'
              },
              amount: 844.02
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'GBP',
                symbol: '£'
              },
              amount: 606.67
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'AUD',
                symbol: 'A$'
              },
              amount: 1088.79
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'JPY',
                symbol: '¥'
              },
              amount: 91147.25
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'RUB',
                symbol: '₽'
              },
              amount: 63826.91
            }
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
                  id: 'Green'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'Cyan',
                  value: '#03FFF7',
                  id: 'Cyan'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'Blue',
                  value: '#030BFF',
                  id: 'Blue'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'Black',
                  value: '#000000',
                  id: 'Black'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'White',
                  value: '#FFFFFF',
                  id: 'White'
                }
              ]
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
                  id: '512G'
                },
                {
                  __typename: 'Attribute',
                  displayValue: '1T',
                  value: '1T',
                  id: '1T'
                }
              ]
            }
          ]
        },
        {
          __typename: 'Product',
          id: 'xbox-series-s',
          name: 'Xbox Series S 512GB',
          inStock: false,
          gallery: [
            'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg'
          ],
          brand: 'Microsoft',
          prices: [
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'USD',
                symbol: '$'
              },
              amount: 333.99
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'GBP',
                symbol: '£'
              },
              amount: 240.07
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'AUD',
                symbol: 'A$'
              },
              amount: 430.85
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'JPY',
                symbol: '¥'
              },
              amount: 36068.27
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'RUB',
                symbol: '₽'
              },
              amount: 25257.22
            }
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
                  id: 'Green'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'Cyan',
                  value: '#03FFF7',
                  id: 'Cyan'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'Blue',
                  value: '#030BFF',
                  id: 'Blue'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'Black',
                  value: '#000000',
                  id: 'Black'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'White',
                  value: '#FFFFFF',
                  id: 'White'
                }
              ]
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
                  id: '512G'
                },
                {
                  __typename: 'Attribute',
                  displayValue: '1T',
                  value: '1T',
                  id: '1T'
                }
              ]
            }
          ]
        },
        {
          __typename: 'Product',
          id: 'apple-imac-2021',
          name: 'iMac 2021',
          inStock: true,
          gallery: [
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000'
          ],
          brand: 'Apple',
          prices: [
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'USD',
                symbol: '$'
              },
              amount: 1688.03
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'GBP',
                symbol: '£'
              },
              amount: 1213.34
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'AUD',
                symbol: 'A$'
              },
              amount: 2177.57
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'JPY',
                symbol: '¥'
              },
              amount: 182294.51
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'RUB',
                symbol: '₽'
              },
              amount: 127653.82
            }
          ],
          attributes: [
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
                  id: '512G'
                },
                {
                  __typename: 'Attribute',
                  displayValue: '1T',
                  value: '1T',
                  id: '1T'
                }
              ]
            },
            {
              __typename: 'AttributeSet',
              id: 'With USB 3 ports',
              name: 'With USB 3 ports',
              type: 'text',
              items: [
                {
                  __typename: 'Attribute',
                  displayValue: 'Yes',
                  value: 'Yes',
                  id: 'Yes'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'No',
                  value: 'No',
                  id: 'No'
                }
              ]
            },
            {
              __typename: 'AttributeSet',
              id: 'Touch ID in keyboard',
              name: 'Touch ID in keyboard',
              type: 'text',
              items: [
                {
                  __typename: 'Attribute',
                  displayValue: 'Yes',
                  value: 'Yes',
                  id: 'Yes'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'No',
                  value: 'No',
                  id: 'No'
                }
              ]
            }
          ]
        },
        {
          __typename: 'Product',
          id: 'apple-iphone-12-pro',
          name: 'iPhone 12 Pro',
          inStock: true,
          gallery: [
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000'
          ],
          brand: 'Apple',
          prices: [
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'USD',
                symbol: '$'
              },
              amount: 1000.76
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'GBP',
                symbol: '£'
              },
              amount: 719.34
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'AUD',
                symbol: 'A$'
              },
              amount: 1290.99
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'JPY',
                symbol: '¥'
              },
              amount: 108074.6
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'RUB',
                symbol: '₽'
              },
              amount: 75680.48
            }
          ],
          attributes: [
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
                  id: '512G'
                },
                {
                  __typename: 'Attribute',
                  displayValue: '1T',
                  value: '1T',
                  id: '1T'
                }
              ]
            },
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
                  id: 'Green'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'Cyan',
                  value: '#03FFF7',
                  id: 'Cyan'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'Blue',
                  value: '#030BFF',
                  id: 'Blue'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'Black',
                  value: '#000000',
                  id: 'Black'
                },
                {
                  __typename: 'Attribute',
                  displayValue: 'White',
                  value: '#FFFFFF',
                  id: 'White'
                }
              ]
            }
          ]
        },
        {
          __typename: 'Product',
          id: 'apple-airpods-pro',
          name: 'AirPods Pro',
          inStock: false,
          gallery: [
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000'
          ],
          brand: 'Apple',
          prices: [
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'USD',
                symbol: '$'
              },
              amount: 300.23
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'GBP',
                symbol: '£'
              },
              amount: 215.8
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'AUD',
                symbol: 'A$'
              },
              amount: 387.3
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'JPY',
                symbol: '¥'
              },
              amount: 32422.38
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'RUB',
                symbol: '₽'
              },
              amount: 22704.14
            }
          ],
          attributes: []
        },
        {
          __typename: 'Product',
          id: 'apple-airtag',
          name: 'AirTag',
          inStock: true,
          gallery: [
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000'
          ],
          brand: 'Apple',
          prices: [
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'USD',
                symbol: '$'
              },
              amount: 120.57
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'GBP',
                symbol: '£'
              },
              amount: 86.67
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'AUD',
                symbol: 'A$'
              },
              amount: 155.54
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'JPY',
                symbol: '¥'
              },
              amount: 13021.04
            },
            {
              __typename: 'Price',
              currency: {
                __typename: 'Currency',
                label: 'RUB',
                symbol: '₽'
              },
              amount: 9118.13
            }
          ],
          attributes: []
        }
      ]
    }

beforeEach(() => {
  wrapper = render(
    <BrowserRouter>
      <Provider store={store}>
        <Category currentCategory={currentCategory} />
      </Provider>
    </BrowserRouter>,
  );
});

describe('', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
