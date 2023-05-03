import React from 'react';
import bg from "../../assets/chef-bg-banner.jpg"

const Blog = () => {
    return (
        <div>
            <div className="banner relative">
                <div className='bg-fixed' style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '150px'
                }}>

                </div>
                <div className="banner-content absolute top-0 bg-black h-[150px] w-full bg-opacity-70 text-center pt-10">
                    <div className='text-white text-center'>
                        <h1 className='text-3xl font-bold mb-5'>Blogs</h1>
                        <p className='font-semibold'>Now more about React js</p>
                    </div>
                </div>
            </div>
            <div className='px-14 grid grid-cols-3 gap-6 my-10'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">1. How to validate React props using PropTypes</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus cumque tempora asperiores odio nostrum beatae modi aspernatur earum assumenda officiis aut voluptatum architecto molestiae fuga libero, deleniti laboriosam rerum! Iste corrupti totam, nulla amet commodi blanditiis dolorem ipsam dignissimos excepturi.</p>
                        
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">2. How to validate React props using PropTypes</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus cumque tempora asperiores odio nostrum beatae modi aspernatur earum assumenda officiis aut voluptatum architecto molestiae fuga libero, deleniti laboriosam rerum! Iste corrupti totam, nulla amet commodi blanditiis dolorem ipsam dignissimos excepturi.</p>
                        
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">3. How to validate React props using PropTypes</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus cumque tempora asperiores odio nostrum beatae modi aspernatur earum assumenda officiis aut voluptatum architecto molestiae fuga libero, deleniti laboriosam rerum! Iste corrupti totam, nulla amet commodi blanditiis dolorem ipsam dignissimos excepturi.</p>
                        
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">4. How to validate React props using PropTypes</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus cumque tempora asperiores odio nostrum beatae modi aspernatur earum assumenda officiis aut voluptatum architecto molestiae fuga libero, deleniti laboriosam rerum! Iste corrupti totam, nulla amet commodi blanditiis dolorem ipsam dignissimos excepturi.</p>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;