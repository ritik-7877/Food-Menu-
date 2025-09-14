import React from "react";

function DishCard({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) {
  return (
    <div className={`dish-card ${isSelected ? "selected" : ""}`}>
      <div className="dish-info">
        <h4>
          {dish.name}
          {/* Add a colored dot for food type */}
          <span className={`food-type-icon ${dish.type.toLowerCase()}`}></span>
        </h4>
        <p>{dish.shortDescription} <span className="read-more" onClick={() => onViewIngredients(dish)}>... Read more</span></p>
        <button className="ingredient-btn" onClick={() => onViewIngredients(dish)}>
          Ingredient
        </button>
      </div>

      <div className="dish-actions">
        <div className="image-container">
          <img src={dish.image} alt={dish.name} className="dish-img" />
          {isSelected ? (
            <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>Remove</button>
          ) : (
            <button className="add-btn" onClick={() => onAddDish(dish.id)}>Add +</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DishCard;
