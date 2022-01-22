/**
 * Functionnal programming version
 * Main search bar component -- looks in recipe title/description/ingredients
 * Display cards accordingly
 */
/*document.getElementById('searchbar').addEventListener('input', (e) => {
	if (e.target.value.length >= 3) {
		const valueUpper = e.target.value.toUpperCase();
		const filteredRecipes = gRecipes.filter(
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