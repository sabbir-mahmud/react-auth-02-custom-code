import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

// firebase auth
const UseFirebase = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/shop";

    // get user from firebase
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        });

    }, [user])


    // handle login
    const HandleLogin = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value; // from elements property
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.emailVerified) {
                    console.log(user);
                    setUser(user);
                    setLoading(false);
                    navigate(from, { replace: true });
                } else {
                    alert("Please verify your email");
                }

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setLoading(false);
            })
    }

    // update user profile
    const updateUserProfile = (fullName) => {
        const user = auth.currentUser;
        updateProfile(user, {
            displayName: fullName
        })
            .then(() => {
            })
            .catch((error) => {
            });
    }

    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("Email sent");
            });
    }

    // handle sign up
    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value; // from elements property
        const userPassword = e.target.firstPassword.value;
        const ConfirmPassword = e.target.ConfirmPassword.value;
        const fullName = e.target.fullName.value;
        let password = '';
        if (userPassword === ConfirmPassword) {
            password = userPassword;
        } else {
            setError("Password and Confirm Password does not match");
            return;
        }
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                updateUserProfile(fullName)
                setUser(user);
                verifyEmail();
                setLoading(false);
                // ...
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setError(errorMessage);
                setLoading(false);
            }
            );
    }

    // handle logout
    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    // return { user, email, password, error, loading, handleEmail, handlePassword, handleFullName, handleLogin };
    return { user, email, password, error, loading, HandleLogin, handleSignUp, handleLogout };
}

export default UseFirebase;