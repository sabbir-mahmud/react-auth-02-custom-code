import React from 'react';
import useProducts from '../../../Hooks/Products/useProducts';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useProducts();


    return (
        <div className='container mx-auto'>
            <div className="mt-7 relative my-5 products-area grid md:grid-cols-4 gap-5">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>


        </div>
    );
};

export default Products;