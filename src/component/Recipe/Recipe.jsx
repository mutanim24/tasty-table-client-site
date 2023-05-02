import React, { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const [favourites, setFavourites] = useState(false);

    const { recipe_name, recipe_img, ingredients, cooking_method, rating } = recipe;

    const handleFav = () => {
        if(favourites){
            const notify = () => toast("Wow so easy!");
        }
        else{
            setFavourites(true)
        }
    };

    return (
        <div className='p-5 rounded shadow-lg flex gap-5'>
            <div className='w-4/12'>
                <img className='rounded' src={recipe_img} alt="" />
            </div>
            <div className='w-8/12'>
                <h1 className='text-3xl font-semibold'>{recipe_name}</h1>
                <p className='my-2'>{cooking_method}</p>
                {
                    ingredients.map((ingredient, index) => {
                        return <ol>
                            <li>{index + 1}. {ingredient}</li>
                        </ol>
                    })
                }
                <div className='flex justify-between'>
                    <div className='flex items-center gap-1 mt-3'>
                        <Rating style={{ maxWidth: 100 }}
                            value={Math.round(rating || 0)}
                            readonly
                        />
                        <span>{rating}</span>
                    </div>
                    <button onClick={handleFav}>{favourites ? <MdFavorite className='text-3xl text-pink-600'></MdFavorite> : <MdFavoriteBorder className='text-3xl text-pink-600'></MdFavoriteBorder>}</button>
                    {/* <ToastContainer /> */}
                </div>
            </div>
        </div>
    );
};

export default Recipe;