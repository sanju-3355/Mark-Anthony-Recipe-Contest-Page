import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css'

const RecipeList = ({ recipes }) => {
  return (
    <ul className="list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default RecipeList;
