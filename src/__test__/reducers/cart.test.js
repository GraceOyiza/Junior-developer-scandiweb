import reducer, {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  togglePopUpCart,
} from '../../feature/cartSlice';

const initialState = {
  isOpen: false,
  cartItems: [],
};

describe.only('Cart Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      ...initialState,
    });
  });

  it('should handle a cart item being added to an empty list', () => {
    const previousState = {...initialState};

    expect(
      reducer(previousState, addToCart({ id: 1, quantity: 1, attributes: [] })),
    ).toEqual({
      cartItems: [{ attributes: [], id: 1, quantity: 1 }],
      isOpen: false,
    });
  });

  it('should handle a cartItem quantity being increased', () => {
    const previousState = {
      cartItems: [{ attributes: [], id: 1, quantity: 1 }],
      isOpen: false,
    };

    expect(reducer(previousState, incrementQuantity(1))).toEqual({
      cartItems: [{ attributes: [], id: 1, quantity: 2 }],
      isOpen: false,
    });
  });

  it('should handle a cartItem quantity being reduced', () => {
    const previousState = {
      cartItems: [{ attributes: [], id: 9, quantity: 2 }],
      isOpen: false,
    };

    expect(reducer(previousState, decrementQuantity(9))).toEqual({
      cartItems: [{ attributes: [], id: 9, quantity: 1 }],
      isOpen: false,
    });
  });

  it('should handle a cartItem quantity being removed', () => {
    const previousState = {
      cartItems: [{ attributes: [], id: 9, quantity: 2 }],
      isOpen: false,
    };

    expect(reducer(previousState, removeItem(9))).toEqual({
      cartItems: [],
      isOpen: false,
    });
  });

  it('should toggle pop cart open state', () => {
    const previousState = {
      isOpen: false,
    };

    expect(reducer(initialState, togglePopUpCart())).toEqual({
        ...initialState,
        isOpen: true,
    });
  });
});
