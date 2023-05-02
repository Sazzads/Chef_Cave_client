import React from 'react';
import img from "../../assets/errorimage.png"
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-16 sm:px-0">
                    <div className="max-w-max mx-auto">
                        <main className="sm:flex">
                            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>
                            <div className="sm:ml-6">
                                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
                                    <p className="mt-1 text-base text-gray-500">Looks like the page you're trying to visit doesn't exist.</p>
                                </div>
                                <div className="mt-10 flex justify-center">
                                    <img src={img} alt="Error" className="h-80 w-auto" />
                                </div>
                            </div>
                        </main>
                        <div className="mt-12 text-center">
                            <p className="text-base font-medium text-gray-500">
                                If you think this is a mistake, please{' '}
                                <Link to="/" className="text-indigo-600 hover:text-indigo-500">
                                    Home
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;