import React from 'react';
import './Cart.css'

// const Cart = ({ cart }) => 
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity===0){
        //     product.quantity =1;
        // }
        product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart-info'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: {total}</p>
            <p>Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <b>Grand Total: ${grandTotal.toFixed(2)}</b>
        </div>
    );
};

export default Cart;