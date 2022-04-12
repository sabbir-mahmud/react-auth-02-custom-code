import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.init";

// firebase auth
const UseFirebase = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle login
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value; // from elements property
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setUser(user);
                setLoading(false);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setLoading(false);
            })
    }

    // // handle button click
    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // };

    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // };

    // const handleFullName = (e) => {
    //     setFullName(e.target.value)
    // };

    // // handle sign in
    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             console.log(user);
    //             setUser(user);
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorCode, errorMessage);
    //         });

    // }

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

    // return { user, email, password, error, loading, handleEmail, handlePassword, handleFullName, handleLogin };
    return { user, email, password, error, loading, handleLogin, handleSignUp };
}

export default UseFirebase;