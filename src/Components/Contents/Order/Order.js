import React, { useEffect, useState } from 'react';
import UseFirebase from '../../../Hooks/useFirebase';

const Order = () => {
    const { user } = UseFirebase();
    const [order, setOrder] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);
    const [itemQtn, setItemQtn] = useState([]);
    useEffect(() => {
        if (user?.email) {
            fetch(`https://sabbir-eshop.herokuapp.com/api/orders?email=${user?.email}`, {

            })
                .then(res => res.json())
                .then(data => setOrder(data));
        } else {
            setOrder([]);
        }
    }, [user]);
    useEffect(() => {
        const orderItemID = order.map(item => item.p_id);
        const url = `https://sabbir-eshop.herokuapp.com/api/product/order`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderItemID)
        })
            .then(res => res.json())
            .then(data => setOrderedItems(data));

    }, [order]);

    useEffect(() => {
        const orderItemID = order.map(item => item.p_id);
        const items = []
        for (const id of orderItemID) {
            const orderItem = order.find(item => item.p_id === id)
            const item = orderedItems.find(item => item._id === id);
            if (item) {
                item.quantity = orderItem?.qtn;
                items.push(item);
            }
        }
        setItemQtn(items);
    }, [order, orderedItems])

    return (
        <div>
            <h3>Order</h3>
            {
                itemQtn.map(item => {
                    return (
                        <div key={item._id}>
                            <p>Name: {item.name}</p>
                            <p>Name: {item.quantity}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Order;