import React from 'react';
import banner_bg from '../../assets/banner-bg.jpg';
import chef from '../../assets/chef.png'

const Home = () => {
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
                <div className="banner-content absolute top-0 bg-black h-[550px] bg-opacity-40 flex w-full px-14">
                    <div className='w-1/2 text-white my-auto'>
                        <h1 className='text-6xl font-bold mb-4'>Indulge in Deliciousness with TastyTable</h1>
                        <p>Your Ultimate Destination for Mouthwatering Recipes and Food Inspiration</p>
                    </div>
                    <div className='w-1/2'>
                        <img className='max-w-full mx-auto	max-h-full' src={chef} alt="" />
                    </div>
                </div>
            </div>
            <div className="chef-section p-14">
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-4'>Meet Our Culinary Masters</h1>
                    <p>Get to Know the Talented Chefs Behind Your Favorite TastyTable Recipes</p>
                </div>
                
            </div>
        </div>
    );
};

export default Home;