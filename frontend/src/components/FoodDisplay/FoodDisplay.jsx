


import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../Fooditem/FoodItem';

function FoodDisplay({ category, searchTerm }) {
  const { food_list } = useContext(StoreContext);

  const filteredData = food_list.filter((item) => {
    const nameExists = item.name && typeof item.name === 'string';
    const matchesSearch = !searchTerm || (nameExists && item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = category === "All" || category === item.category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-list">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
}

export default FoodDisplay;
