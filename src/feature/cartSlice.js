import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isOpen: false,
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        item => item.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.attributes.forEach()
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          item => item.id !== action.payload,
        );
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        item => item.id !== action.payload,
      );
      state.cartItems = removeItem;
    },

    togglePopUpCart: state => {
      state.isOpen = !state.isOpen;
    },

    setVariant: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        item.attributes = item.attributes.map(attr => {
        if (attr.id.toLowerCase() === action.payload.id.toLowerCase()) {
          attr.items.forEach(item => {
            if (item.value === action.payload.value) {
              item.selected = true;
            } else {
              item.selected = false;
            }
          });
        }
        return attr;
      });
        return item;
      })
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  togglePopUpCart,
  decrementQuantity,
  removeItem,
  setVariant,
} = cartSlice.actions;
export default cartSlice.reducer