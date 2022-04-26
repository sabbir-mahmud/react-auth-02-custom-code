const { useState, useEffect } = require("react");

// products list
const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sabbir-eshop.herokuapp.com/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts];
}

export default useProducts;