export const renderAllDesserts = (data) => {
    const ul = document.querySelector('.dessert-pics')
    // console.log(data)
    data.meals.forEach((dessert) => {
    const img = document.createElement("img")
    img.src = dessert.strMealThumb
    const p = document.createElement("p")
    p.textContent = dessert.strMeal
    const button = document.createElement('button')
    button.textContent = "Recipe"
    button.dataset.id = dessert.idMeal
    const li = document.createElement('li')
    li.append(img, p, button)
    ul.append(li)
})
}