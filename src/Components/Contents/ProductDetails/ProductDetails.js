import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});
    useEffect(() => {
        const url = `https://sabbir-eshop.herokuapp.com/api/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [id]);
    const { name, img, price } = productDetails;
    return (
        <div>

            <h1>Product Details: {name} </h1>
            <img src={img} alt="product" />

        </div>
    );
};

export default ProductDetails;