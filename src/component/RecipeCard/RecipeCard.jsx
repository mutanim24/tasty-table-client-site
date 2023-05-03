import React from 'react';
import { AiFillLike, AiOutlineCalendar } from 'react-icons/ai';
import {MdOutlineFavorite } from 'react-icons/md';


const RecipeCard = ({ recipe }) => {
    const { name, chef_name, image, likes, favourites, description } = recipe;
    return (
        <div className='rounded shadow-lg'>
            <img className='rounded' src={image} alt="" />
            <div className='p-6'>
                <h2 className='text-3xl font-bold'>{name}</h2>
                <p className='font-semibold my-3'>-By {chef_name}</p>
                <p>{description}</p>
                <div className='flex justify-between gap-4 mt-3'>
                    <p className='flex items-center gap-1'>
                        <AiFillLike></AiFillLike>
                        <span>{likes}</span>
                    </p>
                    <p className='flex items-center gap-1'>
                        <MdOutlineFavorite></MdOutlineFavorite>
                        <span>{favourites}</span>
                    </p>
                    <button className='btn btn-sm bg-sky-600'>Read more</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;