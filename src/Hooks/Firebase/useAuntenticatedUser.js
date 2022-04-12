import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import auth from "../../Firebase/firebase.init";

const useAuthenticatedUser = () => {
    const [user, setUser] = useState(null);
    setUser(auth.currentUser);
    return user;
}

export default useAuthenticatedUser;