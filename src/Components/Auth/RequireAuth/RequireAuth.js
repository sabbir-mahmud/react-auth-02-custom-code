import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import UseFirebase from "../../../Hooks/useFirebase";

function RequireAuth({ children }) {
    const { user } = UseFirebase();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setLoading(false);
        }
    }, [user])
    console.log(user);
    const location = useLocation();
    console.log(loading, location);

    if (loading) {
        return children;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;