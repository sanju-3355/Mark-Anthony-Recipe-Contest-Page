import React, { useState } from 'react';
import { recipes } from './data';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import FilterSidebar from './components/FilterSidebar';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    setFilteredRecipes(
      recipes.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(lowercasedQuery) ||
          recipe.chef.toLowerCase().includes(lowercasedQuery) ||
          recipe.description.toLowerCase().includes(lowercasedQuery)
      )
    );
  };

  const handleFilterChange = (filters) => {
    setFilteredRecipes(
      recipes.filter((recipe) => {
        return (
          (!filters.contestWinner || recipe.contestWinner) &&
          (!filters.featured || recipe.featured) &&
          (!filters.testKitchenApproved || recipe.testKitchenApproved)
        );
      })
    );
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="main-content">
          <FilterSidebar onFilterChange={handleFilterChange} />
          <div className="recipe-list-container">
            <SearchBar onSearch={handleSearch} />
            <RecipeList recipes={filteredRecipes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
