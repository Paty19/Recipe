import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyResipesComponent';


function App() {

const MY_ID = "a47436f0";
const MY_KEY = "f4a6b75ab641cafd56a069a5ef4cffc7";

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmit, setWordSubmit] = useState('');

useEffect(()=>{
  const getAPI = async() =>{
    const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await responce.json();
    setMyRecipes(data.hits)
  }
  
  getAPI();
},[wordSubmit])

const myRecipeSearch = (e) => {
  setMySearch(e.target.value);
}


const finalSearch = (e) => {
e.preventDefault();
setWordSubmit(mySearch);
}

return (
    <div className="App">

      <div className="container">      
      <video autoPlay muted loop>      
        <source src={video} type="video/mp4" />  
  
      </video>      
      <h1>Find a Recipe</h1>      
      </div>

      <div >
        <form onSubmit={finalSearch} className='container'>
          <input className='search'
                  placeholder='Choose ingredients...'
                  onChange={myRecipeSearch}
                  value = {mySearch}>
          </input>
          <button className='btn'>
          <img src='https://img.freepik.com/free-vector/illustration-magnifying-glass-icon_53876-5613.jpg?size=338&ext=jpg&uid=R72558612&ga=GA1.2.568272328.1666644729&semt=sph' width="30px" alt='icons' className='icons' />
        </button>
        </form>
      </div>
      <div >
          {myRecipes.map(element => (
              <MyRecipesComponent 
              id = {element.id}
              label = {element.recipe.label}
              image = {element.recipe.image}
              calories = {element.recipe.calories}
              ingredients = {element.recipe.ingredientLines}
            />
            ))}
      </div>
        
    </div>
);
}

export default App;




