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
	document.getElementById('cards').innerHTML = `
        <p class='text-center'>Aucune recette ne correspond à votre critère… vous pouvez
        chercher « tarte aux pommes », « poisson », etc.</p>
    `;
}

function displayOneCard(recipe) {
	const ingredientList = Recipe.prototype.getIngredientsAsHTMLList(recipe);
    Recipe.prototype.addCard(recipe, ingredientList);
}