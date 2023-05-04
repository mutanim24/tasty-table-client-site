import React from 'react';
import bg from "../../assets/react.png"

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
            <div className='px-6 md:px-14 grid md:grid-cols-3 gap-6 my-10'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">1. Tell us the differences between uncontrolled and controlled components.</h2>
                        <p>controlled components are React components where the state is controlled by React, meaning the values of the input elements are set and updated by the React state. Uncontrolled components are traditional HTML form elements where the state is handled by the DOM itself. In other words, controlled components are managed by React, while uncontrolled components are managed by the DOM</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">2. How to validate React props using PropTypes</h2>
                        <p>PropTypes is a typechecking library that can be used to validate the types of props being passed to a component. To use PropTypes, you must first import it from the 'prop-types' package. Then, you can define the expected props for your component using the propTypes object, which contains the name and type of each prop.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">3. 3. Difference between Node.js and Express.js?</h2>
                        <p>Node.js is a JavaScript runtime that allows developers to run JavaScript on the server-side. It provides an environment for executing JavaScript code outside of a web browser. Node.js has a built-in module system and a set of core modules that allow developers to perform various tasks such as reading and writing files, networking, and running web servers.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">4. What is a custom hook, and why will you create a custom hooks?</h2>
                        <p>components. It's like a regular function, but it can use hooks, allowing you to extract and reuse common logic from your components.

                            You would create a custom hook when you find yourself using the same logic across multiple components. By creating a custom hook, you can avoid repeating code and simplify the code in your components. This can make your code more readable, maintainable, and easier to test.</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;