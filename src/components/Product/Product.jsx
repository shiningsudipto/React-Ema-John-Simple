import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, ratings, quantity, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
            </div>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;