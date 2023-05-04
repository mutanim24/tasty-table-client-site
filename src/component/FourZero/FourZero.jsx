import React from 'react';
import sad from '../../assets/sad_emoji.png'

const FourZero = () => {
    return (
        <div className='h-[500px] mt-36'>
            <div className='flex justify-center items-center text-9xl font-bold'>
                <div>4</div>
                <div><img className='w-40' src={sad} alt="" /></div>
                <div>4</div>
            </div>
            <h1 className='text-5xl text-center mt-6 font-semibold'>Page is not found</h1>
        </div>
    );
};

export default FourZero;