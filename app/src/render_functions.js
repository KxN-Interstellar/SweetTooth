

export const renderAllDesserts = (data) => {
    const ul = document.querySelector('.dessert-pics')
    // console.log(data)
    data.meals.forEach((dessert) => {
        const img = document.createElement("img")
        img.src = dessert.strMealThumb
        img.width = 200
        const p = document.createElement("p")
        p.textContent = dessert.strMeal
        const button = document.createElement('button')
        button.className = 'getRecipe'
        button.textContent = "Recipe"
        button.dataset.id = dessert.idMeal
        const li = document.createElement('li')
        li.append(img, p, button)
        ul.append(li)
    })
}
export const getIngredientsNames = (dessertData) => {
    let mealData = dessertData.meals[0]
    let filteredIngredients = Object.entries(mealData)
    .filter((key) => key[0].includes('strIngredient') && key[1] !== "" && key[1] !== null)
    // console.log(filteredIngredients)

    const ingredients = []

    // Desctructured filtered ingredients to only contain the second of the two entries 
    for (const [_, ingredient] of filteredIngredients) ingredients.push(ingredient)

    // console.log(ingredients)
    return ingredients
}    

export const getIngredientMeasurements = (dessertData) => {
    let mealData = dessertData.meals[0]
    let filteredMeasurements = Object.entries(mealData)
    .filter((key) => key[0].includes('strMeasure') && key[1] !== "" && key[1] !== null && key[1] !== " ")
    // console.log(filteredMeasurements)
    const measurements = []

    // Desctructured filtered ingredients to only contain the second of the two entries 
    for (const [_, measurement] of filteredMeasurements) measurements.push(measurement)

    // console.log(ingredients)
    return measurements
}

export const getIngredientList = (data) => {
    const ingredientArray = getIngredientsNames(data)
    console.log("ingredient",ingredientArray)
    const measurementArray = getIngredientMeasurements(data)
    console.log(measurementArray)

    const convertArraysToObj =  (ingredientArray, measurementArray) => {
        if (ingredientArray.length != measurementArray.length || 
            ingredientArray.length == 0 || 
            measurementArray.length == 0) {
            return null;
        }
        let obj = {};
     
        ingredientArray.forEach((k, i) => 
                  { obj[k] = measurementArray[i] })
                  
        return obj;
    }
    console.log(convertArraysToObj(ingredientArray, measurementArray))
    return convertArraysToObj(ingredientArray, measurementArray)
}

export const renderSingleDessert = (dessertdata, ingredientList) => {
    document.getElementById('app').style.display = 'none'
    const specificDessert = document.getElementById('specifics')
    const img = document.createElement("img")
    img.className = "dessertImg"
    img.src = dessertdata.meals[0].strMealThumb
    const container1 = document.createElement("div")
    container1.className = "container"
    container1.id = "sticky"
    const container2 = document.createElement("div")
    container2.className = "container"
    const stickydessert = document.createElement("div")
    stickydessert.className = "recipeContent"
    const dessertText = document.createElement("div")
    dessertText.className = "recipeContent"
    const p = document.createElement('p')
    p.className = "singleDessertHeading"
    p.innerText = dessertdata.meals[0].strMeal
    const ingredientsHeader = document.createElement("p")
    ingredientsHeader.textContent = "Ingredients:"
    ingredientsHeader.className = "headers"
    const ingredients = document.createElement("div")
    const usableList = Object.entries(ingredientList)
    console.log(usableList)
    for (const [key, value] of usableList){
        const mealNeeds = document.createElement("p")
        mealNeeds.innerText = `${key} : ${value}`
        ingredients.append(mealNeeds)
    }
    const instructionsHeader = document.createElement("p")
    instructionsHeader.textContent = "Instructions:"
    instructionsHeader.className = "headers"
    const recipe = document.createElement("p")
    recipe.innerText = dessertdata.meals[0].strInstructions
    // const favorite = document.createElement("button")
    // favorite.innerText = "Add to Favorites"
    // favorite.className = "favsButton"
    dessertText.append(ingredientsHeader, ingredients, instructionsHeader, recipe)
    stickydessert.append(img, p)
    container1.append(stickydessert)
    container2.append(dessertText)
    specificDessert.append(container1, container2)
    document.getElementById('specifics').style.display = "flex"
}

