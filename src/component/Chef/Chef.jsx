import React from 'react';
import { AiFillLike, AiOutlineCalendar } from 'react-icons/ai';
import { FaHamburger } from 'react-icons/fa';
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
                <p className='flex items-center gap-1'>
                    <AiOutlineCalendar></AiOutlineCalendar>
                    <span>Experience: {years_of_experience} years</span>
                </p>
                <p className='flex items-center gap-1'>
                    <FaHamburger></FaHamburger>
                    <span>Number of recipes: {num_recipes}</span>
                </p>
                <p className='flex items-center gap-1'>
                    <AiFillLike></AiFillLike>
                    <span>{likes}</span>
                </p>
                <Link to={`/chef-details/${id}`}><button className='btn bg-sky-600 mt-7'>View Recipes</button></Link>
            </div>
        </div>
    );
};

export default Chef;