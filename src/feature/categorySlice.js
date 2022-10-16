import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    currentCategory: {
      name: '',
      products: []
    },
    categories: [],
  },
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCurrentCategoryName: (state, action) => {
      state.currentCategory.name = action.payload;
    }
  },
});

// this is for dispatch
export const { setCurrentCategory, setCategories, setCurrentCategoryName } =
  categorySlice.actions;

// this is for configureStore
export default categorySlice.reducer;
