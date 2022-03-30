import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        currentMessage: []
    },


    reducers: {

        setUser: (state, action) => {
            const { username, name, messages, date, token } = action.payload;
            state.user = {
                username,
                name,
                messages,
                // messages: [
                //     {
                //         threadId: '32sfr',
                //         messages: [
                //             {
                //                 from: {
                //                     username: 'romanreignswwe',
                //                     name: 'Roman Reigns'
                //                 },
                //                 message: 'What up bruh',
                //                 date: date
                //             },

                //             {
                //                 from: {
                //                     username: 'dvnchnc',
                //                     name: 'Devin'
                //                 },
                //                 message: 'nothin much',
                //                 date: date
                //             }
                //         ],
                //     },

                //     {
                //         threadId: 'frt56',
                //         messages: [
                //             {
                //                 from: {
                //                     username: 'justbeiber',
                //                     name: 'Justin Beiber'
                //                 },
                //                 message: 'Tryna hit the studio later bro?',
                //                 date: date
                //             },

                //             {
                //                 from: {
                //                     username: 'dvnchnc',
                //                     name: 'Devin'
                //                 },
                //                 message: 'Bet just lemme know when',
                //                 date: date
                //             }
                //         ]
                //     }
                // ],
                isSignedIn: true,
                token
            };
        },

        getUser: (state, action) => {
            state.user = action.payload.user
        },

        setCurrentMessage: (state, action) => {
            const message = state.user.messages.find(message => message.threadId === action.payload);
            state.currentMessage = message;
        },

        sendMessage: (state, action) => {
            const { payload } = action;
            state.currentMessage.messages.push(payload);
            const messageThread = state.user.messages.find(message => message.threadId === payload.thread);
            
            if (messageThread) {
                messageThread.messages.push(payload);
            } else {
                state.user.message.push(payload);
            }
        }
    }
})

export default userSlice.reducer;