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
                avi: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Universal_Champion_Roman_Reigns_WWE_Live_event_01-23-2022.jpeg',
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
                avi: 'https://media.vogue.co.uk/photos/60538d2bd4f5db6cd813d095/1:1/w_4480,h_4480,c_limit/Justin-Bieber-vogue-credit-Mike-Rosenthal-1.jpg',
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
                avi: 'https://m.media-amazon.com/images/M/MV5BODY2YzY2MDMtYzU2NC00OTdkLThkNTYtYjhhZWNmODQ1ZjA1XkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_.jpg',
                thread: [],
                id: 4
            },

            {
                name: 'Ryan',
                username: 'justinbeiber',
                message: 'Nah bro, I\'m good on that lol',
                timeStamp: '10 mins ago',
                avi: 'https://pbs.twimg.com/profile_images/1337879764531437568/pphNnkgb_400x400.jpg',
                thread: [],
                id: 5
            },

            {
                name: 'Iliza',
                username: 'justinbeiber',
                message: 'Haha say less, I\'m there',
                timeStamp: '2 days ago',
                avi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Iliza_Shlesinger_2017_(cropped).jpg/1200px-Iliza_Shlesinger_2017_(cropped).jpg',
                thread: [],
                id: 6
            },

            {
                name: 'Otto',
                username: 'justinbeiber',
                message: 'Let\'s catch some waves later bro',
                timeStamp: '1 day ago',
                avi: 'https://chumley.barstoolsports.com/wp-content/uploads/2019/03/28/otto-rocket.jpg',
                thread: [],
                id: 7
            },

            {
                name: 'Kira',
                username: 'kirak',
                message: 'Lol',
                timeStamp: '2 hours ago',
                avi: 'https://wallpaperaccess.com/full/2670707.jpg',
                thread: [],
                id: 8
            },

            {
                name: 'Cole Sprouse',
                username: 'colesp',
                message: 'Did you see what happened?',
                timeStamp: 'An hour ago',
                avi: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Cole_Sprouse_%2848478678751%29_%28cropped%29.jpg',
                thread: [],
                id: 9
            },
            
            {
                name: 'Andrew Mead',
                username: 'meadio',
                message: 'How\'s the job hunt going? Mastered Redux yet?',
                timeStamp: '24 days ago',
                avi: 'https://yt3.ggpht.com/ytc/AKedOLQTQFwHR3O3ORJN1cUaaG1WUNIIhGpf2sIHOwGi=s900-c-k-c0x00ffffff-no-rj',
                thread: [],
                id: 11
            },

            {
                name: 'Stephen Grider',
                username: 'thegridman',
                message: 'Good job on the app bro!!!',
                timeStamp: 'A month ago',
                avi: 'https://avatars.githubusercontent.com/u/5003903?v=4',
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
