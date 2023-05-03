import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const {creteUser}=useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photo,email,password);
        
        creteUser(email,password)
        .then(result=>{
            const createdUser=result.user
            console.log(createdUser);
        })
        .catch(error=>{
            console.log(error);
        })
        
    };
    return (
        <div>       
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
                <p className=' text-red-700'>error</p>
                <p className='mb-2 text-green-700'>success</p>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                </div>
                <span>Already Have an Account? Please </span>
                <Link to='/login' className='text-blue-700'>Login</Link>
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

export default Register;