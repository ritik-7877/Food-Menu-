import React from "react";

function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  foodTypeFilter,      // <-- New prop
  onFoodTypeChange,  // <-- New prop
  categoryCounts
}) {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

  return (
    <div className="filters-container">
      <div className="search-and-tabs">
        <input
          type="text"
          placeholder="Search for any dish..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-bar"
        />
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat} <span>{categoryCounts[cat] || 0}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="toggle-section">
        {/* New Toggle Buttons */}
        <button 
          className={`toggle-btn ${foodTypeFilter === 'VEG' ? 'active' : ''}`}
          onClick={() => onFoodTypeChange(foodTypeFilter === 'VEG' ? 'ALL' : 'VEG')}
        >
          Veg
        </button>
        <button 
          className={`toggle-btn ${foodTypeFilter === 'NON-VEG' ? 'active' : ''}`}
          onClick={() => onFoodTypeChange(foodTypeFilter === 'NON-VEG' ? 'ALL' : 'NON-VEG')}
        >
          Non-Veg
        </button>
      </div>
    </div>
  );
}

export default Filters;