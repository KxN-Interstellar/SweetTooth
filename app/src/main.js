import { fetchData } from "./fetch_functions"
// fetchData.js

import { fetchData } from "./fetch_functions";

const allDesserts = fetchData('https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert')
allDesserts.forEach((dessert) => {
    document.querySelector()
})



/*
Nicole
*/

const specificDesert = fetchData('https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049');


console.log(specificDesert)
 