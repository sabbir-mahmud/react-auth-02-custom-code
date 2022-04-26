import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseFirebase from '../../../Hooks/useFirebase';

const Product = (product) => {
    const navigate = useNavigate();
    const { seller, name, img, price, } = product.product;
    const { user } = UseFirebase();
    const handleAddToCart = (id) => {
        const email = user?.email;
        const p_id = id
        let qtn = 1;
        const order = {
            email, p_id, qtn
        }

        const url = 'https://sabbir-eshop.herokuapp.com/api/orders';

        fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            }
        )
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // products details
    const productDetails = (id) => {
        navigate(`/shop/${id}`)
    }


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img onClick={() => { productDetails(product.product._id) }} className="w-full" src={img} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">Price: ${price}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {seller}</span>
            </div>
            <div className="add-to-card-btn">
                <button onClick={() => {
                    handleAddToCart(product.product._id)
                }} className='my-5 bg-gray-200 p-3 w-75 rounded shadow'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;