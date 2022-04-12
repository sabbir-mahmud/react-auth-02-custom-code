import React from 'react';
import useAuthenticatedUser from '../../../Hooks/Firebase/useAuntenticatedUser';

const Accounts = () => {
    const [user] = useAuthenticatedUser();
    return (
        <div>
            <h1>Accounts</h1>
            <p>{user ? user.email : 'No user'}</p>

        </div>
    );
};

export default Accounts;