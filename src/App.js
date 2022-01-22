import {React, useState} from 'react';
import './App.css';
import {Recipe} from "./components/Recipe.js"
import {recipes} from "./constants/recipes.js"

const App = () => {
  const [currentRecipe, setCurrentRecipe] = useState("");
  const allRecipes = recipes;

  const getRandomRecipe = () => {
    const chosenRecipe = allRecipes[Math.floor(Math.random() * allRecipes.length)].name
    setCurrentRecipe(chosenRecipe)
    return
  }
  return (
    <>
    <h1>Hitta dagens mat</h1>
    <Recipe recipe = {currentRecipe} />
    <button onClick={() => getRandomRecipe()}>Ge mig inspo</button>
    </>
  );
}

export default App;
