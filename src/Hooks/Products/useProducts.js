const { useState, useEffect } = require("react");

// products list
const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts];
}

export default useProducts;