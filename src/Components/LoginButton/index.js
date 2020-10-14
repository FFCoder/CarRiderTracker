import React from 'react'
import { Button } from "@material-ui/core"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Auth } from "../../services/firebase"


export default (props) => {
    const login = () => {
        let provider = new Auth.GoogleAuthProvider();
        Auth().signInWithPopup(provider);
    }
    const logout = () => {
        Auth().signOut();
    }

    const [user, loading, error] = useAuthState(Auth());

    if (loading) {
        return (
            <span>Initializing...</span>
        )
    }
    if (error) {
        return (
            <span>Error: {error}</span>
        )
    }
    if (user) {
        return (<span>Hello, {user.displayName}</span>)
    }
    return (
        <React.Fragment>
            <Button variant="contained" onClick={login} style={{ marginRight: "0" }}>
                Log In
            </Button>
        </React.Fragment>
    )
}