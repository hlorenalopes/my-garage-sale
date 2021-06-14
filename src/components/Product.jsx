import React from 'react';

function Product(props) {
  return <div className="product">
    <h1>{props.name}</h1>
    <img src={props.imgURL} alt="Product" />
    <p>{props.description}</p>
    <p>{props.price}</p>
  </div>
}

export default Product;