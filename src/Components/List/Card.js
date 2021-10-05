import React from 'react';
import './Card.css';

const Card = ({image, name, category, author, price}) => {
  return (
    <div className="card">
        <img className="img" src={image} alt={`${name} img`} />
        <label>{category}</label>
        <label>{name}</label>
        <label>{author}</label>
        <label>{`$ ${price}`}</label>
    </div>
  );
}

export default Card;
