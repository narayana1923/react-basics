import {configureStore} from '@reduxjs/toolkit';
import testSliceReducer from './slices/testSlice';

const store = configureStore({
  reducer: {
    test: testSliceReducer,
  },
});

export default store;
