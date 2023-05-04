import React, { useEffect, useState } from 'react';
import banner_bg from '../../assets/banner-bg.jpg';
import bottom_banner from '../../assets/bottom banner.jpg';
import chef from '../../assets/chef.png'
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const Home = () => {
    const chefs = useLoaderData();
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch("https://tasty-table-server-side-mutanim24.vercel.app/recipes")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div>
            <div className="banner relative">
                <div className='bg-fixed' style={{
                    backgroundImage: `url(${banner_bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '550px'
                }}>

                </div>
                <div className="banner-content absolute top-0 bg-black h-[550px] bg-opacity-40 md:flex w-full md:px-14">
                    <div className='md:w-1/2 text-white my-auto text-center md:text-left'>
                        <h1 className='text-4xl md:text-6xl font-bold mb-4'>Indulge in Deliciousness with TastyTable</h1>
                        <p>Your Ultimate Destination for Mouthwatering Recipes and Food Inspiration</p>
                    </div>
                    <div className='md:w-1/2'>
                        <img className='md:w-96 md:max-w-full mx-auto	md:max-h-full' src={chef} alt="" />
                    </div>
                </div>
            </div>
            <div className="chef-section p-6 md:p-14">
                <div className='text-center mb-4'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-4'>Meet Our Culinary Masters</h1>
                    <p className='text-sm md:text-base'>Get to Know the Talented Chefs Behind Your Favorite TastyTable Recipes</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    {
                        chefs.map(chef => <Chef
                            key={chef.id}
                            chef={chef}
                        ></Chef>)
                    }
                </div>
            </div>
            <div className='my-8'>
                <div className='text-center mb-4'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-2 md:mb-4'>Trending Tastes</h1>
                    <p className='text-sm md:text-base'>Explore the Flavors Everyone is Talking About</p>
                </div>
                <div className='grid md:grid-cols-3 gap-4 px-6 md:px-14'>
                    {
                        recipes.map(recipe => <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                        ></RecipeCard>)
                    }
                </div>
            </div>
            <div>
                <div className="banner relative">
                    <div className='bg-fixed h-[600px] md:h-96' style={{
                        backgroundImage: `url(${banner_bg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>

                    </div>
                    <div className="banner-content absolute top-0 bg-black h-[600px] md:h-[400px] w-full bg-opacity-70 py-8 px-6 md:px-14">
                        <div className='text-white text-center mb-5'>
                            <h1 className='text-3xl md:text-5xl font-bold mb-5'>Eating for Health</h1>
                            <p className='text-sm md:text-base'>Tips for Making the Most of Your Meals</p>
                        </div>
                        <div className='grid md:grid-cols-3 gap-8 text-white mt-8'>
                            <div className='border-r-2'>
                                <h2 className='text-2xl font-semibold mb-3'>Focus unprocessed foods</h2>
                                <p className='text-sm md:text-base'>One of the simplest ways to eat healthier is to focus on whole, unprocessed foods.</p>
                            </div>
                            <div className='border-r-2'>
                                <h2 className='text-2xl font-semibold mb-3'>Eat oiless food</h2>
                                <p className='text-sm md:text-base'>One of the simplest ways to eat healthier is to focus on whole, unprocessed foods.</p>
                            </div>
                            <div className='border-r-2 md:border-r-0'>
                                <h2 className='text-2xl font-semibold mb-3'>Eat vegetable</h2>
                                <p className='text-sm md:text-base'>One of the simplest ways to eat healthier is to focus on whole, unprocessed foods.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;