for (recipe of recipes){

    let ing = ""
    
    recipe.ingredients.forEach(ingredient => {
        ing += `
            <li><span class="bold close">${ingredient.ingredient}</span> ${ingredient.quantity!=undefined ?`: ${ingredient.quantity}`:""} ${ingredient.unit!=undefined?ingredient.unit:""}</li>
        `      
    })

    document.getElementById("cards").innerHTML += `
    <div class="recipe-card">
        <div class=recipe-img></div> 
        <div class=recipe-card-body>
            <div class="d-flex justify-content-between mb-2">
                <span class="bold recipe-name">${recipe.name}</span>
                <span class="bold"><i class="far fa-clock"></i> ${recipe.time}min</span>
            </div>

            <div class="d-flex justify-content-between card-container">
                <span> <ul class="ingredient-list"> ${ing} </ul> </span>

                <span class="col-6 recipe-description bold"> ${recipe.description} </span>
            </div>
        </div>
    </div>
    `
}