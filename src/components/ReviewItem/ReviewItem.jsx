import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './RevieItem.css'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
                <h4>{name}</h4>
                <p>Price:<span>{price}</span></p>
                <p>Order Quantity:<span>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;