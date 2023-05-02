import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams()
    const foodrecipe = useLoaderData()
    const [chef, setChef] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/allchefs/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])

    return (
        <div className='my-container'>
            {/* <p>{chef.name}</p> */}

            <div className='chef-details'>
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure><img src={chef.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">{chef.name}</h2>
                        <p className='text-center'>{chef.bio}</p>
                        <p className='text-center'>Likes: {chef.Likes}</p>
                        <p>{chef.rating}</p>

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