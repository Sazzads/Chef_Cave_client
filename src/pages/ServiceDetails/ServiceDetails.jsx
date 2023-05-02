import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import { useLoaderData, useParams } from 'react-router-dom';
import '@smastrom/react-rating/style.css';
import {  FaHeart} from "react-icons/fa";


const ServiceDetails = () => {
    const { id } = useParams()
    const foodrecipe = useLoaderData()
    const [chef, setChef] = useState('')

    const { rating } = chef

    useEffect(() => {
        fetch(`http://localhost:5000/allchefs/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])

    return (
        <div className='my-container'>

            <div className='chef-details'>
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img src={chef.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">{chef.name}</h2>
                        <p className='text-center'>{chef.bio}</p>
                        <p className='text-center'>Likes: {chef.Likes}</p>

                        <div className="card-actions justify-center">
                        <Rating style={{ maxWidth: 150 }} value={Math.round(rating?.number || 0)} readOnly></Rating>
                        <span className='text-1xl'>Rating:{rating?.number}</span>
                        
                        </div>
                        <div className='card-actions justify-center mt-2'>
                        <button className='btn bg-red-600'>Add To Favourite</button>
                        </div>


                    </div>

                </div>
            </div>
            <div className='recepie'>

            </div>
            <h2>services details:{foodrecipe.length}</h2>
            {
                foodrecipe.map(recipe => <p key={recipe.food_id}>{recipe.name}</p>)
            }
        </div>
    );
};

export default ServiceDetails;