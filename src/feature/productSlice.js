import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: {
      brand: '',
      description: '',
      prices: [],
      attributes: [],
    },
    imageIndex: 0,
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setImageIndex: (state, action) => {
      state.imageIndex = action.payload;
    },
    setVariant: (state, action) => {
      state.product.attributes = state.product.attributes.map((attr) => {
        if (attr.id.toLowerCase() === action.payload.id.toLowerCase()) {
          attr.items.forEach((item) => {
            if (item.value === action.payload.value) {
              item.selected = true;
            } else {
              item.selected = false;
            }
          })
        }
        return attr;
      });
    }
  },
});

// this is for dispatch
export const { setProduct, setImageIndex, setVariant } = productSlice.actions;

// this is for configureStore
export default productSlice.reducer;
