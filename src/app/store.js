import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../feature/cartSlice';
import currencyReducer from '../feature/currencySlice';
import productReducer from '../feature/productSlice';
import categoryReducer from '../feature/categorySlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    currency: currencyReducer,
    product: productReducer,
    category: categoryReducer,
  },
});