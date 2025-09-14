import React from "react";

function IngredientModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{dish.name}</h2>
        <img src={dish.image} alt={dish.name} className="modal-img" />
        <p>{dish.description}</p>
        <h4>Ingredients ({dish.serves})</h4>
        <ul>
          {dish.ingredients.map((ing, index) => (
            <li key={index}>{ing.name} - {ing.qty}</li>
          ))}
        </ul>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default IngredientModal;
