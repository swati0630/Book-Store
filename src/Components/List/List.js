import React from 'react';
import Card from './Card';
import './List.css';

const List = ({list}) => {
  return (
    <div className="list">
      {
        list.map(({name, img, category, author, price}) => (
          <Card
            key={`${name}-title`}
            name={name}
            image={img}
            category={category}
            author={author}
            price={price}
          />
        ))
      }
    </div>
  );
}

export default List;
