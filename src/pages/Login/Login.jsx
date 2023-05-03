import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state.from.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
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
                <p className=' text-red-700'>error</p>
                <p className='mb-2 text-green-700'>success</p>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </div>
                <span>Don't Have an Account? Please </span>
                <Link to='/register' className='text-blue-700'>Register</Link>
            </form>
            <div className=' max-w-sm mx-auto mt-8'>
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <button className="btn"><FaGoogle className='me-3 '></FaGoogle > Google</button>
                    <button className="btn"><FaGithub className='me-3 '></FaGithub>GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Login;