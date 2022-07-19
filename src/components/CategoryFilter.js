import React from "react";

function CategoryFilter({ categories, selectedCategory, handleCategoryFilter }) {
  const categoryButtons = categories.map(category => {
    return (
      <button 
      key={category} 
      onClick={() => handleCategory(category)}
      className={category === selectedCategory ? "selected" : null}
      >
        {category}
        </button>
    )})
    function handleCategory(category) {
      handleCategoryFilter(category)
    }
   

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
