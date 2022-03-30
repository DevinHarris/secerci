import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from "../components/messagesSlice";
import userSlice from "../components/userSlice";
import searchSlice from "../components/searchSlice";

export default configureStore({
    reducer: {
        messages: messagesSlice,
        user: userSlice,
        searchTerm: searchSlice
    }
})