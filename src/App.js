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
    <p class = "introtext">Ingen idé vad du ska laga idag? Få ett random receptförslag!</p>
    <Recipe recipe = {currentRecipe} />
    <button class = "button" onClick={() => getRandomRecipe()}>Hitta recept</button>
    </>
  );
}

export default App;
