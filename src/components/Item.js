import React from 'react';
import './Item.css';

function Item({ icon, name }) {
  return (
    <div className="item">
      <div className="icon">{icon}</div>
      <span>{name}</span>
    </div>
  );
}

export default Item;
