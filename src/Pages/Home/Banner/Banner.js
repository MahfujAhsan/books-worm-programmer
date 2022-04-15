import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <h2>“Knowledge is power.” - Francis Bacon</h2>
                <div className='banner-input mt-3'>
                    <input type="search" name="search" id="" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;