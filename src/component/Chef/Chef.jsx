import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, chef_name, chef_picture, num_recipes, likes, years_of_experience } = chef;
    return (
        <div className='flex items-center gap-5 p-5 rounded shadow-xl'>
            <div className='w-1/2'>
                <img src={chef_picture} alt="" />
            </div>
            <div className='w-1/2 space-y-4 font-semibold'>
                <h1 className='text-3xl font-bold'>{chef_name}</h1>
                <p>Experience: {years_of_experience}</p>
                <p className='flex items-center'>
                    {/* <FiRecipe></FiRecipe> */}
                    <span>Number of recipes: {num_recipes}</span>
                </p>
                <p className='flex items-center gap-2'>
                    <AiFillLike></AiFillLike>
                    <span>{likes}</span>
                </p>
                <Link to={`/chef-details/:${id}`}><button className='btn bg-sky-600'>View Recipes</button></Link>
            </div>
        </div>
    );
};

export default Chef;