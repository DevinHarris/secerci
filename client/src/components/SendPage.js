import React from 'react';
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SendMessage from "./SendMessage";


const SendPage = () => {
    const { user } = useSelector(state => state.user);
   
    return (
        <div className="send-page">
            {
                user.isSignedIn ? <div>
                    <h1 className="send__meta">Sending new message as <b>{ user.username }</b></h1>
                    {
                        <SendMessage />
                    }
                </div> :
                (
                    <div>
                        <h1>Sorry you must logged in to view this page.</h1>
                        <Link to="/login">Please login here.</Link>
                    </div>
                )
            }
        </div>
    )
}

export default SendPage;