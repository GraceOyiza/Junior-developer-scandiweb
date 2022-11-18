import reducer, {
  setProduct,
  setImageIndex  
} from '../../feature/productSlice';

const initialState = {
    product: {
      brand: '',
      description: '',
      prices: [],
      attributes: [],
    },
    imageIndex: 0,
};

describe.only('Product Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      ...initialState,
    });
  });

  it('should handle a cart item being added to an empty list', () => {
    const previousState = { ...initialState };

    expect(
      reducer(
        previousState,
        setProduct({
          brand: 'test',
          description: 'test',
          prices: [],
          attributes: [],
        }),
      ),
    ).toEqual({
      ...initialState,
      product: {
        brand: 'test',
        description: 'test',
        prices: [],
        attributes: [],
      },
    });
  });

  it('should change product image', () => {
    const previousState = {...initialState};

    expect(reducer(previousState, setImageIndex(1))).toEqual({
      ...initialState,
      imageIndex: 1
    });
  });


});
