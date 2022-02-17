import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from "../components/messagesSlice";
import userSlice from "../components/userSlice";

export default configureStore({
    reducer: {
        messages: messagesSlice,
        user: userSlice
    }
})