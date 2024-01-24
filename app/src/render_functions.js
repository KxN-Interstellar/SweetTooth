export const renderAllDesserts = (data) => {
    const ul = document.querySelector('.dessert-pics')
    // console.log(data)
    data.meals.forEach((dessert) => {
    const img = document.createElement("img")
    img.src = dessert.strMealThumb
    const p = document.createElement("p")
    p.textContent = dessert.strMeal
    const li = document.createElement('li')
    li.append(img, p)
    ul.append(li)
})
}