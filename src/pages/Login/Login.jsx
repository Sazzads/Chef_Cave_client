import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

// import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";



const Login = () => {
    const { signIn,createUserGoogle,createUserGit } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState("")
    const [errorAuth, setErrorAuth] = useState("")

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        setError("");
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (password.length < 6) {
            setError('Please add at least 6 cherecters');
            return;
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setErrorAuth(error.message);
                return;
                
            })
    }

    const handleGoogleSignIn = (auth,provider) => {
        createUserGoogle(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGitLogin=(auth,gitProvider)=>{
        createUserGit(auth,gitProvider)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from, { replace: true });


        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div>

            <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-8" >
                <h2 className='text-3xl mb-5'>Please  Login</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block  font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        name='email'
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block  font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        name='password'
                        required
                    />
                </div>
                <p className=' text-red-700 mb-4'>{error}</p>
                <p className=' text-red-700 mb-4'>{errorAuth}</p>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="mb-3 inline-flex justify-center py-2 px-4 rounded-md bg-yellow-500 border-0 hover:bg-black hover:text-white text-black"
                    >
                        Login
                    </button>
                </div>
                <span>Don't Have an Account? Please </span>
                <Link to='/register' className='text-blue-700'>Register</Link>
            </form>
            <div className=' max-w-sm mx-auto mt-8'>
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <button onClick={handleGoogleSignIn} className="btn"><FaGoogle className='me-3 '></FaGoogle > Google</button>
                    <button onClick={handleGitLogin} className="btn"><FaGithub className='me-3 '></FaGithub>GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Login;