/**
 * Functionnal programming version
 * Main search bar component -- looks in recipe title/description/ingredients
 * Display cards accordingly
 */
/*document.getElementById('searchbar').addEventListener('input', (e) => {
	if (e.target.value.length >= 3) {
		const valueUpper = e.target.value.toUpperCase();
		const filteredRecipes = recipes.filter(
			(recipe) =>
				recipe.name.toUpperCase().includes(valueUpper) ||
				recipe.description.toUpperCase().includes(valueUpper) ||
				recipe.ingredients.forEach((ingredient) => {
					ingredient.ingredient.toUpperCase().includes(valueUpper);
				})
		);

		displayCards(filteredRecipes);
	} else {
		displayCards(recipes);
	}
});*/

/**
 * Native Loop Version - push on new branch -- seems faster
 */
document.getElementById('searchbar').addEventListener('input', (e) => {
	if (e.target.value.length >= 3) {
		const valueUpper = e.target.value.toUpperCase();
		document.getElementById('cards').innerHTML = '';

		//The problem of doing this without any stock is that no trace is kept
		filteredResearches = [];
		for (const recipe of recipes) {
			if (
				recipe.name.toUpperCase().includes(valueUpper) ||
				recipe.description.toUpperCase().includes(valueUpper)
			) {
				filteredResearches.push(recipe);
				displayOneCard(recipe);
			}

			for (const ingredient of recipe.ingredients) {
				if (ingredient.ingredient.includes(valueUpper)) {
					filteredResearches.push(recipe);
					displayOneCard(recipe);
				}
			}
		}

		if (document.getElementById('cards').innerHTML == '') {
			displayCards([]);
		}

		//Maintenant il faut éditer les ingrédients disponibles // éditer les appareils disponibles // Ustensils disponibles
		//If filtered resarch is empty
	} else {
		displayCards(recipes);
	}
});
