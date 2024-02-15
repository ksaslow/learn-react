export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

// iterate through each and translate recipe into something that html understands
// to be rendered correctly. 
// return JSX with div from the map function
// need to associate a unique key with each div


// outer map returns list of divs!
// inner map returns individual list items!

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      
    </div>
  );
}