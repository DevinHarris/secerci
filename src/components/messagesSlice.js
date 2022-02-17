import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [
            {
                name: 'Devin Chance',
                username: 'dvnchnc',
                message: 'What up bruh',
                timeStamp: '54 mins ago',
                avi: '',
                thread: [
                    "What up bruh"
                ],
                id: 1
            },

            {
                name: 'Roman Reigns',
                username: 'romanreignswwe',
                message: 'Just sending you your daily reminder to adknowledge me.',
                timeStamp: '13 mins ago',
                avi: '',
                thread: [
                    "Just sending you your daily reminder to adknowlege me."
                ],
                id: 2
            },

            {
                name: 'Justin Beiber',
                username: 'justinbeiber',
                message: 'You still tryna hop in the studio?',
                timeStamp: '4 days ago',
                avi: '',
                thread: [
                    'You still tryna hop in the studio?'
                ],
                id: 3
            },

            {
                name: 'Jace',
                username: 'justinbeiber',
                message: 'Where you at bruh',
                timeStamp: '5 hours ago',
                avi: '',
                thread: [],
                id: 4
            },

            {
                name: 'Rob',
                username: 'justinbeiber',
                message: 'Nah bro, I\'m good on that lol',
                timeStamp: '10 mins ago',
                avi: '',
                thread: [],
                id: 5
            },

            {
                name: 'Nicole',
                username: 'justinbeiber',
                message: 'Haha say less, I\'m there',
                timeStamp: '2 days ago',
                avi: '',
                thread: [],
                id: 6
            },

            {
                name: 'Otto',
                username: 'justinbeiber',
                message: 'Let\'s catch some waves later bro',
                timeStamp: '1 day ago',
                avi: '',
                thread: [],
                id: 7
            },

            {
                name: 'Alice',
                username: 'bigbooty',
                message: 'Lol',
                timeStamp: '2 hours ago',
                avi: '',
                thread: [],
                id: 8
            },

            {
                name: 'Jason',
                username: 'justinbeiber',
                message: 'Did you see what happened?',
                timeStamp: 'An hour ago',
                avi: '',
                thread: [],
                id: 9
            },

            {
                name: 'Dylan',
                username: 'justinbeiber',
                message: 'What time we grabbin dinner?',
                timeStamp: '32 mins ago',
                avi: '',
                thread: [],
                id: 10
            },
            
            {
                name: 'Andrew Mead',
                username: 'justinbeiber',
                message: 'How\'s the job hunt going? Mastered Redux yet?',
                timeStamp: '24 days ago',
                avi: '',
                thread: [],
                id: 11
            },

            {
                name: 'Stephen Grider',
                username: 'justinbeiber',
                message: 'Good job on the app bro!!!',
                timeStamp: 'A month ago',
                avi: '',
                thread: [],
                id: 12
            }
        ],

        currentMessage: [],
        messageSearchTerm: ''
    },

    reducers: {
        getMessages: (state, action) => {
            state.messages = [...state.messages, action.payload]
        },

        getMessage: (state, action) => {
            const message = state.messages.find(message => message.id === action.payload);

            state.currentMessage = message;
        },

        searchMessages: (state, action) => {
           state.messageSearchTerm = action.payload;
        },

        sendMessage: (state, action) => {
            state.currentMessage.thread = [...state.currentMessage.thread, action.payload];
        }
    }
})

export default messageSlice.reducer;
