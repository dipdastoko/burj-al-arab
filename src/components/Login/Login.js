import React from 'react';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { googleSignIn } = useAuth();

    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={googleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;