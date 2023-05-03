import React from 'react';
import chef_bg from '../../assets/chef-bg-banner.jpg'
import { useLoaderData, useLocation } from 'react-router-dom';
import { AiFillLike, AiOutlineCalendar } from 'react-icons/ai';
import { FaHamburger } from 'react-icons/fa';
import Recipe from '../Recipe/Recipe';


const ChefDetails = () => {
    const chefDetails = useLoaderData();
    // console.log(chefDetails.recipes);
    const { id, chef_name, chef_description, years_of_experience, num_recipes, likes, chef_picture } = chefDetails;
    const recipes = chefDetails.recipes;
    const { recipe_name, recipe_img, ingredients, cooking_method, rating, favorite } = chefDetails.recipes;


    return (
        <>
            <div className="banner relative">
                <div className='bg-fixed' style={{
                    backgroundImage: `url(${chef_bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '350px'
                }}>

                </div>
                <div className="banner-content absolute top-0 bg-black h-[350px] bg-opacity-40 flex w-full p-14">
                    <div className='w-4/12'>
                        <img className='max-w-full mx-auto	max-h-full rounded-full' src={chef_picture} alt="" />
                    </div>
                    <div className='w-8/12 text-white my-auto'>
                        <h1 className='text-4xl font-bold mb-3'>{chef_name}</h1>
                        <p>{chef_description}</p>
                        <div className='flex gap-12 font-semibold mt-4'>
                            <p className='flex items-center gap-2'>
                                <FaHamburger></FaHamburger>
                                <span>Number of recipes: {num_recipes}</span>
                            </p>
                            <p className='flex items-center gap-1'>
                                <AiOutlineCalendar></AiOutlineCalendar>
                                <span>Experience: {years_of_experience} years</span>
                            </p>
                            <p className='flex items-center gap-1'>
                                <AiFillLike></AiFillLike>
                                <span>{likes}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-14 py-10'>
                <div className='text-center mb-4'>
                    <h1 className='text-5xl font-bold mb-4'>{chef_name}'s Delicious Recipes</h1>
                    <p>Explore the culinary genius of Michelin-starred {chef_name} with these mouthwatering recipes.</p>
                </div>
                <div>
                    {
                        recipes.map(recipe => <Recipe
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>
            </div>
        </>
    );
};

export default ChefDetails;