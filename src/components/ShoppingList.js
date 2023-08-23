import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleChange(e) {
    const input = e.target.value;
    setSearchItem(input)
  }



  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && item.name.toLowerCase().includes(searchItem.toLowerCase())) return true;
    
    return item.category === selectedCategory && item.name.toLowerCase().includes(searchItem.toLowerCase());
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchItem} onSearchChange={handleChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
