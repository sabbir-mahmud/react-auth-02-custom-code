import React from 'react';
import homeBackground from '../../../homebg.jpg'

const Homepage = () => {
    return (
        <div className='container mx-auto'>
            <div className="img-wrapper overflow-hidden w-4/6 h-4/6 rounded my-5 mx-auto">
                <img className='w-full' src={homeBackground} alt="" />
            </div>
        </div>
    );
};

export default Homepage;