async function getAllRecipes(){
    const res = await fetch("./data/recipes.json");
    const data = await res.json();
    return data;
}

async function getAllUniqueAppliances(){
    const data = await getAllRecipes();
    const uniqueApplianceArray = [data.recipes[0].appliance];

    for (const recipe of data.recipes){
        if (!isIncluded(recipe.appliance, uniqueApplianceArray)){
            uniqueApplianceArray.push(recipe.appliance)
        }
    }
    
    return uniqueApplianceArray;
}

async function getAllUniqueIngredients(){
    const data = await getAllRecipes();
    const uniqueIngredientArray = [data.recipes[0].ingredients[0].ingredient];
    for (recipe of data.recipes){
        for (const ingredientObject of recipe.ingredients){    
            if (!isIncluded(ingredientObject.ingredient, uniqueIngredientArray)){
                uniqueIngredientArray.push(ingredientObject.ingredient);
            }   
        }
    }

    return uniqueIngredientArray;
}

async function getAllUniqueUstensils(){
    const data = await getAllRecipes();
    const uniqueUstensilsArray = [data.recipes[0].ustensils[0]];
    for (const recipe of data.recipes){
        for (const element of recipe.ustensils){ 
            if (!isIncluded(element, uniqueUstensilsArray)){
                uniqueUstensilsArray.push(element);
            } 
        }
    }
    return uniqueUstensilsArray;
}
