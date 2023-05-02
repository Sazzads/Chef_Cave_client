import React from 'react';
import coverPic from "../../assets/cover.jpg"
import { FaBeer, FaBook, FaFish, FaPeopleArrows, FaQuestion } from "react-icons/fa";


const Home = () => {

    return (
        <div>
            {/* carusel  */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={coverPic} className="w-full" />
                    <div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-10 right-14  top-1/2">
                        <p className='text-black md:text-6xl sm:text-5xl '>Family Favourite </p>
                        <p className='text-black md:text-6xl sm:text-5xl mb-5'>Recipes </p>
                        <p className='text-black md:text-3xl sm:text-xl mb-5'>This site is a little different in that it concentrates on hearty home-style cooking rather than fancy exotic dishes or complicated techniques.</p>
                        <button className='btn w-1/4 bg-red-700 border-0 hover:bg-red-900 text-white mb-5'>Explore More</button>

                    </div>
                </div>
            </div>
            {/* carusel  */}

            {/* second section  */}
            <div className='my-container'>
                <div className=' flex flex-col items-center mb-6'>
                    <h1 className='text-3xl font-bold py-3'>Job Website</h1>
                    <p className='font-thin'>Discover 1000+ Foods in this Website. and collect yours</p>
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-4 '>

                    <div className='border m-4 p-6 bg-purple-100 hover:bg-purple-200'>
                        < FaBook className='text-3xl mb-2'></FaBook>
                        <h5 className='text-xl mb-2'>Document Online</h5>
                        <p>This document covers the installation and use of this theme and reveals answers</p>
                    </div>

                    <div className='border m-4 p-6 bg-purple-100 hover:bg-purple-200'>
                        < FaPeopleArrows className='text-3xl mb-2'></FaPeopleArrows>
                        <h5 className='text-xl mb-2'>Chef</h5>
                        <p>This site you can get 100 of chefs and their biography</p>
                    </div>

                    <div className='border m-4 p-6 bg-purple-100 hover:bg-purple-200'>
                        < FaFish className='text-3xl mb-2'></FaFish>
                        <h5 className='text-xl mb-2'>Food Recipie</h5>
                        <p>Need a recipe? Get dinner on the table with Food Network's best recipes, videos, cooking tips and meal ideas from top chefs, shows and experts.</p>
                    </div>

                    <div className='border m-4 p-6 bg-purple-100 hover:bg-purple-200'>
                        < FaQuestion className='text-3xl mb-2'></FaQuestion>
                        <h5 className='text-xl mb-2'>pre sales questions</h5>
                        <p>Open-Ended Questions. Multiple Choice Questions. Ordinal Scale Questions.</p>
                    </div>

                </div>
            </div>
            {/* second section  */}


        </div>
    );
};

export default Home;