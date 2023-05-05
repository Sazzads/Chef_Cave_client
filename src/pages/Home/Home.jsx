import React from 'react';
import coverPic from "../../assets/coverPic.jpg"
import { FaBeer, FaBook, FaFish, FaPeopleArrows, FaQuestion } from "react-icons/fa";
import Services from '../Chef/Chef';


const Home = () => {

    return (
        <div>
            {/* carusel  */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={coverPic} className="w-full" />
                    <div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-10 right-14  top-1/2">
                        <p className='md:text-black md:text-7xl sm:text font-mono font-semibold'>Family Favourite </p>
                        <p className='md:text-black md:text-7xl sm:text-3xl mb-5 font-mono font-semibold'>Recipes </p>
                        <p className='md:text-black md:text-3xl sm:text-xl mb-5 font-mono font-semibold' >This site is a little different in that it concentrates on hearty home-style cooking.</p>
                        <button className='btn w-1/4 bg-yellow-500 border-0 hover:bg-black hover:text-white text-black mb-5'>Explore More</button>
                    </div>
                </div>
            </div>
            {/* carusel  */}

            {/* second section  */}
            <div className='my-container'>
                <div className=' flex flex-col items-center mb-6'>
                    <h1 className='text-3xl font-bold py-3'>Cook deliciously and quickly</h1>
                    <p className='font-thin'>Choose a chef, decide on a specific dish and dive deep into cooking</p>
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-4 '>

                    <div className='card-body shadow-xl m-4 shadow-xl m-4 hover:bg-gray-500 '>
                        < FaBook className='text-3xl mb-2'></FaBook>
                        <h5 className='text-xl mb-2'>Document Online</h5>
                        <p>This document covers the installation and use of this theme and reveals answers</p>
                    </div>

                    <div className='card-body shadow-xl m-4  hover:bg-gray-500 '>
                        < FaPeopleArrows className='text-3xl mb-2'></FaPeopleArrows>
                        <h5 className='text-xl mb-2'>Chef</h5>
                        <p>This site you can get 100 of chefs and their biography</p>
                    </div>

                    <div className='card-body shadow-xl m-4  hover:bg-gray-500 '>
                        < FaFish className='text-3xl mb-2'></FaFish>
                        <h5 className='text-xl mb-2'>Food Recipie</h5>
                        <p>Need a recipe? Get dinner on the table with Food Network's best recipes, videos.</p>
                    </div>

                    <div className='card-body shadow-xl m-4  hover:bg-gray-500 '>
                        < FaQuestion className='text-3xl mb-2'></FaQuestion>
                        <h5 className='text-xl mb-2'>pre sales questions</h5>
                        <p>Open-Ended Questions. Multiple Choice Questions. Ordinal Scale Questions.</p>
                    </div>

                </div>
            </div>
            {/* second section  */}
            <div className=''>
            <Services></Services>
            </div>

            {/* contact us section  */}
            <section className=" py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                            Contact Us
                        </p>
                        <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
                            You can also leave feedback or ask questions through these channels. You will receive valuable information about your customers preferences and expectations if done correctly.
                        </p>
                        <div className="mt-10 flex justify-center">
                            <div className="w-full max-w-lg">
                                <form className="grid grid-cols-1 gap-6">
                                    <div className="rounded-md shadow-sm">
                                        <label htmlFor="name" className="block text-sm font-medium ">
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md  p-4"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="rounded-md shadow-sm">
                                        <label htmlFor="email" className="block text-sm font-medium ">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md  p-4"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    <div className="rounded-md shadow-sm">
                                        <label htmlFor="message" className="block text-sm font-medium ">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows="4"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-4"
                                            placeholder="Enter your message"
                                        ></textarea>
                                    </div>
                                    <div className="rounded-md shadow">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 rounded-md bg-yellow-500 border-0 hover:bg-black hover:text-white text-black mb-5"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact us section  */}


        </div>
    );
};

export default Home;