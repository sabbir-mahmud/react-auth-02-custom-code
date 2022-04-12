import React from 'react';
import UseFirebase from '../../../Hooks/useFirebase';

const Accounts = () => {
    const { user, loading, handleLogout } = UseFirebase();
    console.log(loading);
    return (
        <div>
            <h1>Accounts</h1>
            <p>{user ? user.displayName : 'No user'}</p>
            <p>{user ? user.email : ''}</p>
            <button onClick={handleLogout}>Logout</button>

        </div>
    );
};

export default Accounts;