import React from 'react';

const Product = (product) => {
    console.log(product);
    const { stock, shipping, seller, name, img, price, id } = product.product;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={img} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">Price: ${price}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {seller}</span>
            </div>
            <div className="add-to-card-btn">
                <button className='my-5 bg-gray-200 p-3 w-75 rounded shadow'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;