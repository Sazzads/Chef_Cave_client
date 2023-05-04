import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const { creteUser, createUserGoogle, createUserGit, updateUserProfile,done } = useContext(AuthContext)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleRegister = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);

        if (password.length < 6) {
            setError('Please add at least 6 cherecters');
            return;
        }

        creteUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                setError('')
                event.target.reset();
                // updateUserdata(result.user,name,photo)
                setSuccess("REGISTER COMPLETE SUCCESSFULLY");
                updateUserProfile(name,photo)
                
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setSuccess('')
            })

    };


    const handleGoogleLogin = (auth, provider) => {
        createUserGoogle(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGitLogin = (auth, gitProvider) => {
        createUserGit(auth, gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            {/* <h1 className=' text-green-700 text-center font-bold text-3xl my-4'>{success}</h1> */}
            <h1 className=' text-green-700 text-center font-bold text-3xl my-4'> {done}</h1>
            <form className="max-w-sm mx-auto mt-8 " onSubmit={handleRegister}>
                <h2 className='text-3xl mb-5'>Please register</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block  font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        name='name'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="photo" className="block  font-bold mb-2">
                        Photo Url
                    </label>
                    <input
                        type="text"
                        id="photo"
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        name='photo'
                        required
                    />
                </div>
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


                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="mb-3 inline-flex justify-center py-2 px-4 rounded-md bg-yellow-500 border-0 hover:bg-black hover:text-white text-black"
                    >
                        Register
                    </button>
                </div>
                <span>Already Have an Account? Please </span>
                <Link to='/login' className='text-blue-700'>Login</Link>
            </form>
            <div className=' max-w-sm mx-auto mt-8'>
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <button onClick={handleGoogleLogin} className="btn"><FaGoogle className='me-3 '></FaGoogle > Google</button>
                    <button onClick={handleGitLogin} className="btn"><FaGithub className='me-3 '></FaGithub>GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Register;