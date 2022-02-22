import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },


    reducers: {

        setUser: (state, action) => {
            const { username, name, messages, token } = action.payload;
            state.user = {
                username,
                name,
                messages,
                isSignedIn: true,
                token
            };
        },

        getUser: (state, action) => {
            state.user = action.payload.user
        },

        isSignedIn: (state, action) => {
            state.isSignedIn = !state.isSignedIn;
        }
    }
})

export default userSlice.reducer;