import React from 'react';
import UseFirebase from '../../../Hooks/useFirebase';

const Homepage = () => {
    const { user } = UseFirebase();
    return (
        <div>
            <h1>Homepage</h1>
            {user ? <p>{user.displayName}</p> : <p>No user</p>}
        </div>
    );
};

export default Homepage;