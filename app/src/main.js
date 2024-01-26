import { fetchData } from "./fetch_functions"
import { renderAllDesserts, renderSingleDessert, getIngredientsNames, getIngredientMeasurements, getIngredientList
 } from "./render_functions"


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


// button event listener ////////

 const singleDessert = async(idMeal) => {
    const dessertID = await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    // console.log(dessertID)
    return dessertID;
}

const handleButtonClick = async (event) => {
    const button = event.target.closest("button")
    if(event.target.tagName === "BUTTON"){
        const idMeal = button.dataset.id;
        // console.log(idMeal);
        const dessert = await singleDessert(idMeal)
        console.log(dessert);
        const ingredientList = getIngredientList(dessert)
        console.log("hi", ingredientList)
        renderSingleDessert(dessert, ingredientList)
    }
}

///////////////////////////////
const main = async () => {
    const allDesserts = await fetchData('https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert')
    renderAllDesserts(allDesserts)
    // for getting buttons 
    const ul = document.querySelector('.dessert-pics');
    ul.addEventListener("click", handleButtonClick)
}

main()
