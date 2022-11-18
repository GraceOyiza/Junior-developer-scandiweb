import { createSlice, current } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencies: [],
    currentCurrency: '',
  },
  reducers: {
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },

    setCurrentCurrency: (state, action) => {
      state.currentCurrency = action.payload;
    },
  },
});

// this is for dispatch
export const { setCurrencies, setCurrentCurrency } = currencySlice.actions;

// this is for configureStore
export default currencySlice.reducer;
