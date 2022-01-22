export const Recipe = ({recipe}) => {
  const defaultText = "Ingen idé vad du ska laga idag?"
  return(
    <div class = "recipe-card">
      <p>{recipe ? recipe : defaultText}</p>
    </div>
  )
}