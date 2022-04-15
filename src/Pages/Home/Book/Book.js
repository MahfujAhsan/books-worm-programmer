import React from 'react';

const Book = ({ book }) => {
    const { _id, name, price, details, img } = book;
    return (

        <div className='col-12 col-md-4'>
            <div className='text-center border border-2 rounded-2 my-4 p-5'>
                <img className='w-50 d-block mx-auto shadow-lg' src={img} alt="" />
                <h6>{name}</h6>
                <p>{price}</p>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Book;