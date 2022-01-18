function displayCards(recipes) {
	document.getElementById('cards').innerHTML = '';
	if (recipes.length == 0) {
		displayNoResultFound();
	} else {
		recipes.forEach((recipe) => {
			displayOneCard(recipe);
		});
	}
}

function displayNoResultFound() {
	document.getElementById(
		'cards'
	).innerHTML = `<p class='text-center'>Aucune recette ne correspond à votre critère… vous pouvez
    chercher « tarte aux pommes », « poisson », etc.</p>`;
}

function getIngredients(recipe) {
	let list = '';
	recipe.ingredients.forEach((ingredient) => {
		list += `
        <li>
            <span class="bold close">${ingredient.ingredient}</span> 
            ${
													ingredient.quantity != undefined ? `: ${ingredient.quantity}` : ''
												}
            ${ingredient.unit != undefined ? ingredient.unit : ''}
        </li>
        `;
	});
	return list;
}

function displayOneCard(recipe) {
	const ingredientList = getIngredients(recipe);

	document.getElementById('cards').innerHTML += `
        <div class="recipe-card col-md-6 col-lg-4">
            <div class=recipe-img></div> 
            <div class=recipe-card-body>
                <div class="d-flex justify-content-between mb-2">
                    <span class="bold recipe-name">${recipe.name}</span>
                    <span class="bold"><i class="far fa-clock"></i> 
                        ${recipe.time}min
                    </span>
                </div>

                <div class="d-flex justify-content-between card-container">
                    <span> <ul class="ingredient-list"> ${ingredientList} </ul> </span>

                    <span class="col-6 recipe-description bold">
                        ${recipe.description.substr(0, 160)}... 
                    </span>
                </div>
            </div>
        </div>
    `;
}

displayCards(recipes);
