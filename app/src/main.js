// fetchData.js

import { fetchData } from "./fetch_functions";

const allDesserts = fetchData('')
allDesserts.forEach((dessert) => {
    
})



/*
Nicole
*/

const specificDesert = fetchData('https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049');


console.log(specificDesert)
 