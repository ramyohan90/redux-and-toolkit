import { configureStore } from '@reduxjs/toolkit'
import AuthSliceReducer from './reducers/slice';

export const store = configureStore({
    reducer: {
      auth: AuthSliceReducer
    }
});


