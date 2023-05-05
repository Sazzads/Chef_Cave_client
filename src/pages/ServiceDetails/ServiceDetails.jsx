import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import { useLoaderData, useParams } from 'react-router-dom';
import '@smastrom/react-rating/style.css';
// import { toast } from 'react-toastify';
// import { toast, ToastContainer } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';



const ServiceDetails = () => {
    const { id } = useParams()
    const foodrecipe = useLoaderData()
    const [chef, setChef] = useState('')
    const [favorites, setFavorites] = useState([]);
    const addToFavorites = (id) => {
        if (favorites.includes(id)) {
          toast.error('Already added to favorites!');
        } else {
          setFavorites([...favorites, id]);
          toast.success('Added to favorite Recipe!');
        }
      };

    // const { rating } = chef


    useEffect(() => {
        fetch(`https://server-site-pi.vercel.app/allchefs/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])

    // const notify = () => toast("Favourite added");

    return (

        <div className='my-container'>
            <ToastContainer></ToastContainer>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={chef.img} className="w-full" />

                </div>
            </div>

            <div className='chef-details'>
                <div className="card w-100 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl text-center">{chef.name}</h2>
                        <p className='text-center'>{chef.bio}</p>
                        <p className='text-center text-xl'>Likes: {chef.Likes}</p>
                        <p className='text-center text-xl'>experience: {chef.experience}</p>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 '>

                {
                    foodrecipe.map(recipe => <div key={recipe.food_id} className="card w-100 bg-neutral text-neutral-content m-4 ">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{recipe.name}</h2>
                            <div>
                                <h3>Ingredients</h3>
                                <p>{recipe.ingredients.a}</p>
                                <p>{recipe.ingredients.b}</p>
                                <p>{recipe.ingredients.c}</p>
                                <p>{recipe.ingredients.d}</p>
                                <p>{recipe.ingredients.e}</p>
                            </div>
                            <p className='text-justify'>{recipe.cookingMethod}</p>

                            <div className="card-actions justify-center">
                                <Rating style={{ maxWidth: 150 }} value={Math.round(recipe.rating?.number || 0)} readOnly></Rating>
                                <span className='text-1xl'>Rating:{recipe.rating?.number}</span>
                               
                                <button onClick={()=>{addToFavorites(recipe.food_id)}}  disabled={favorites.includes(recipe.food_id)}  className='btn bg-yellow-400 text-black'>Add To Favourite</button>
                            </div>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default ServiceDetails;