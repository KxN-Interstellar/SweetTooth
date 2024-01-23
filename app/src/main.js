import { fetchData } from "./fetch_functions"
import { renderAllDesserts } from "./render_functions"
// fetchData.js

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const main = async() => {
    const allDesserts = await fetchData('https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert')
    renderAllDesserts(allDesserts)

}

main()




/*
Nicole
*/

// const specificDessert = fetchData('https://www.themealdb.com/api/json/v1/1/lookup.php?i=53049');



specificDessert()
 