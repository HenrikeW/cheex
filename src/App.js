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
    <div class = "ellipse"></div>
    <h1 class = "heading">Hitta <br></br> dagens mat</h1>
    <p class = "introtext">Ingen idé vad du ska laga idag? <br></br> Få ett random receptförslag!</p>
    <Recipe recipe = {currentRecipe} />
    <button class = "button" onClick={() => getRandomRecipe()}>Hitta recept</button>
    </>
  );
}

export default App;
