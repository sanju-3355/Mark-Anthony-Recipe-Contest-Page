import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <li className="recipe-card">
      <img src={recipe.imgUrl} alt={recipe.name} className="recipe-img" />
      <h3 className="recipe-title">{recipe.name}</h3>
      <p className="chef-name">{recipe.chef}</p>
      <div className="rating">
        <span>⭐ {recipe.avgRating}</span> | {recipe.totalRatings} ratings
      </div>
      <p className="description">{recipe.description}</p>
    </li>
  );
};

export default RecipeCard;

