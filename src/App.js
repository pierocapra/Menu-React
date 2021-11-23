import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [meals, setMeals] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMeals(items);
      return;
    }
    const newMeals = items.filter((meal) => {
      return meal.category === category;
    });
    setMeals(newMeals);
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu meals={meals} />
      </section>
    </main>
  );
}
export default App;
