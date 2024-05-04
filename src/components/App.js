import React, { useState } from "react";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const[selectedCategory, setSelectedCategory] = useState("All");

  const handleDarkModeClick = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter selectedCategory={selectedCategory} onChange={handleCategoryChange}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
