import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            username: "dvnchnc",
            name: "Devin Chance",
            avatar: "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/s150x150/133695944_216241140077758_7274725814984578133_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=110&_nc_ohc=t8UrBvGyYLQAX89t2TK&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_7Xsygk8lpsq98DXGdVPP0UdMRXHdId9_mZ6SPGeBc1A&oe=620376DC&_nc_sid=7bff83",
            messages: [
                {
                    "from": "romanreigns",
                    "body": "Sup brah",
                    "date": "20 mins ago"
                }
            ]
        }
    },

    reducers: {
        getUser: (state, payload) => {
            state.user = payload.user
        }
    }
})

export default userSlice.reducer;