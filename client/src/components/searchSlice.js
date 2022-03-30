import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        term: ''
    },

    reducers: {
        getSearchTerm: (state, action) => {
            state.term = action.payload
        }
    }
})

export default searchSlice.reducer;