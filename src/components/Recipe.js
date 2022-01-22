export const Recipe = ({recipe}) => {
  const defaultText = "Ingen idé vad du ska laga idag?"
  return(
    <p>{recipe ? recipe : defaultText}</p>
  )
}