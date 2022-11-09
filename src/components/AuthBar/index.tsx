import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './style.css'

const AuthBar = () => {
    const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <>
            {isAuthenticated ? <div className='auth-bar'>
                <div className='user-name'>{user ? user.name : 'Loading...'}</div>
                <button className='log-out-button' onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                </button>
            </div> : <div className="sign-in-button" onClick={() => loginWithRedirect()}>Sign In</div>
            }
        </>
    );
};

export default AuthBar;