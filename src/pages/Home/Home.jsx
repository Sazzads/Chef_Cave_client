import React from 'react';
import coverPic from "../../assets/cover.jpg"


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

            <div className='my-container'>
                <div className=' flex flex-col items-center mb-6'>
                    <h1 className='text-3xl font-bold py-3'>Job Category Order</h1>
                    <p className='font-thin'>It takes just one job to develop a successful relationship that can propel your career forward.</p>
                </div>
                
                <div className=' grid grid-cols-1 md:grid-cols-4 '>

                 <div className='border m-4 p-6 bg-purple-100 hover:bg-purple-200'>
                    <h1>aa</h1>
                 </div>

                 
                 <div className='border m-4 p-6 bg-purple-100 hover:bg-purple-200'>
                    <h1>aa</h1>
                 </div>
                 
                 <div className='border m-4 p-6 bg-purple-100 hover:bg-purple-200'>
                    <h1>aa</h1>
                 </div>
                 
                 <div className='border m-4 p-6 bg-purple-100 hover:bg-purple-200'>
                    <h1>aa</h1>
                 </div>
                 
                </div>


                </div>
        </div>
    );
};

export default Home;