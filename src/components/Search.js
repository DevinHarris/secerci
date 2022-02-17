import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageSlice } from "./messagesSlice";

const Search = () => {

    const dispatch = useDispatch();

    return (
        <div className="search">
            <input className="search__input" type="text" placeholder="Search messages" onChange={(e) => dispatch({ type: 'messages/searchMessages', payload: e.target.value })} />
        </div>
    )
}

export default Search;