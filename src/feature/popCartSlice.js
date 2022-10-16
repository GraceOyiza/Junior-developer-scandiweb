import { createSlice } from '@reduxjs/toolkit';

export const popCartSlice = createSlice({
  name: 'popCarts',
  initialState: [],
  reducers: {
    addPopCart: (state, action) => {
      const popCart = {
        id: state.length + 1,
        cartItems: [color, price, size, image, productDesc, productName].action
          .payload,
      };

      state.push(popCart);
    },
  },
});

// this is for dispatch
export const { addPopCart } = popCartSlice.actions;

// this is for configureStore
export default popCartSlice.reducer;
