import { createSlice } from '@reduxjs/toolkit';
import { AuthStateInit } from '../helper';

const AuthSlice = createSlice({
    name: 'auth',
    initialState: AuthStateInit,
    reducers: {
        authSliceReducer: (state, action) => {
            if (action.payload && action.payload.isLoggedIn) {
                return action.payload;
            }
            return state;
        },
        resetReducer: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
            state.user = action.payload.user;
            return state;
        }
    }
})

export const { authSliceReducer, resetReducer } = AuthSlice.actions;
export default AuthSlice.reducer;
