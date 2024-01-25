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

    document.getElementById('app').style.display = 'none'

    const specificDessert = document.getElementById('specifics')

    const p = document.createElement('p').innerText = 'HFuhfuahgjghjghjkhgkahlg'
    specificDessert.append(p)

    document.getElementById('app').style.display = 'block'

}