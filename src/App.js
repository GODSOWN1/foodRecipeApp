import React, {useState} from "react";
import "./App.css"
import "./key"
import Axios from "axios";
import RecipeTile from "./RecipeTile";



   function App(){

    const [query, setQuery]= useState("")
    const [recipes, setRecipes]= useState([])
    const [healthSelect, setHealthSelect]= useState("vegan")


    const YOUR_APP_ID = "a89e6b26";
    const YOUR_APP_KEY = "a57190fce04417da7b94e3447430714d";
    
    const BASE_URL= `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthSelect}`


    async function getRecipes(){
    const result= await Axios.get(BASE_URL);
    setRecipes(result.data.hits)
    console.log(result.data);
    }


    function handleChange(event){
        setQuery(event.target.value)
    }


    function onSubmit(event){
        event.preventDefault();
        getRecipes();
    }



       return (
           <div className="app">
           <h1 >Food Recipe Plaza🍔</h1>
            <form className="appForm" onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="enter ingridients" 
                value= {query} 
                onChange= {handleChange}
                />
                
                <input 
                className="appSubmit" 
                type="submit" 
                value="search" 
                
                />
                
            <select className="app_healthlabels">
                <option  value="vegan" onClick={()=> setHealthSelect("vegan")}> vegan</option>

                <option  value="vegetarian" onClick={()=> setHealthSelect("vegan")}> vegetarian</option>

                <option  value="paleo" onClick={()=> setHealthSelect("vegan")}> paleo</option>

                <option  value="diary-free" onClick={()=> setHealthSelect("vegan")}> diary-free</option>

            </select>

            </form>

            <div className="appRecipes">
            {recipes.map(recipe =>{
                return (
                    <RecipeTile
                    recipe= {recipe}
                    />
                        )
                    })}
                </div>
           </div>
       );
   }


export default App;  