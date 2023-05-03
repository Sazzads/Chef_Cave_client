import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const Services = () => {
    const [chefData, setChefData] = useState([])

    fetch("https://server-site-pi.vercel.app/allchefs")
        .then(res => res.json())
        .then(data => setChefData(data))
    // console.log(chefData);
    return (
        <div className='my-container'>
            <h2 className='text-center text-4xl mb-1 font-bold'>Chefs Details </h2>
            <p className='text-center mb-10 '>They are the most popular chefs of bangladesh</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    chefData.map(chef => <div key={chef.id} className="card w-96 bg-base-100 shadow-xl hover:bg-gray-500">
                
                        <figure><LazyLoad threshold={0.55}><img src={chef.img} alt="chef" /></LazyLoad></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {chef.name}
                                <div className="badge badge-secondary">{chef.Likes} likes</div>
                            </h2>
                            <p>{chef.experience} Expericence</p>
                            <p>{chef.recipeNumber} Recipies</p>
                            <div className="card-actions justify-end">
                                <Link to={`/servicedetails/${chef.id}`} className="btn bg-yellow-400 text-black hover:text-white">View Recipies</Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>



        </div>
    );
};

export default Services;