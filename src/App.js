import React, { useState } from "react";
import menuData from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchTerm, setSearchTerm] = useState("");
  // Change state to handle 'ALL', 'VEG', 'NON-VEG'
  const [foodTypeFilter, setFoodTypeFilter] = useState("ALL"); 
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // Updated filter logic
  const filteredDishes = menuData.filter((dish) => {
    const matchesCategory = dish.mealType === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    // Updated logic to check food type
    const matchesFoodType = foodTypeFilter === "ALL" || dish.type === foodTypeFilter;
    return matchesCategory && matchesSearch && matchesFoodType;
  });

  // Group dishes by their sub-category (e.g., "North Indian")
  const groupedDishes = filteredDishes.reduce((acc, dish) => {
    const groupName = dish.category.name;
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(dish);
    return acc;
  }, {});


  // Category counts logic (no change needed)
  const categoryCounts = menuData.reduce((acc, dish) => {
    if (selectedDishes.includes(dish.id)) {
        acc[dish.mealType] = (acc[dish.mealType] || 0) + 1;
    }
    return acc;
  }, {});

  const handleAddDish = (id) => {
    if (!selectedDishes.includes(id)) {
      setSelectedDishes([...selectedDishes, id]);
    }
  };

  const handleRemoveDish = (id) => {
    setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <Filters
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          // Pass the new state and handler
          foodTypeFilter={foodTypeFilter}
          onFoodTypeChange={setFoodTypeFilter}
          categoryCounts={categoryCounts}
        />
      </nav>

      <main className="main-content">
        <DishList
          // Pass grouped dishes to the list
          groupedDishes={groupedDishes} 
          onAddDish={handleAddDish}
          onRemoveDish={handleRemoveDish}
          selectedDishes={selectedDishes}
          onViewIngredients={handleViewIngredients}
        />
      </main>

      <div className="footer-bar">
        <p>Total Dishes Selected: {selectedDishes.length}</p>
        <button className="continue-btn">Continue</button>
      </div>

      {isModalOpen && (
        <IngredientModal dish={currentDish} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default App;