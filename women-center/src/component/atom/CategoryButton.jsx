import React from 'react';
import './CategoryButton.css'

const CategoryButton = ({ title, onClick, selected }) => {
    return (
      <button onClick={onClick} className={`category-button ${selected ? 'selected' : ''}`}>
        {title}
      </button>
    );
  };

export default CategoryButton;