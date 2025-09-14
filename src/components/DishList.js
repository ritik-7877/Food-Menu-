import React from "react";
import DishCard from "./DishCard";

function DishList({ groupedDishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) {
  const categories = Object.keys(groupedDishes);

  if (categories.length === 0) {
    return <p className="no-results-message">No dishes match your filters.</p>;
  }

  return (
    <div className="dish-list-container">
      {categories.map((categoryName) => (
        <div key={categoryName} className="category-group">
          <h3 className="category-header">{categoryName}</h3>
          <div className="dish-list">
            {groupedDishes[categoryName].map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onAddDish={onAddDish}
                onRemoveDish={onRemoveDish}
                isSelected={selectedDishes.includes(dish.id)}
                onViewIngredients={onViewIngredients}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DishList;