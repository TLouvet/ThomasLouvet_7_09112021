/**
 * Main searchbar update
 */
document.getElementById('searchbar').addEventListener('input', (e) => {
	document.getElementById('cards').innerHTML = '';

	if (e.target.value.length >= 3) {
		const valueUpper = e.target.value.toUpperCase();
		// Get first filter
		const filteredResearches = Search.prototype.filterFromSearchBar(valueUpper);
		// Filter by Tag
		let remainingResearches = [];
		if (gTags.length > 0){
			remainingResearches = Search.prototype.filterByTag(filteredResearches);
		}
		else {
			remainingResearches = filteredResearches;
			for (const recipe of remainingResearches){
				displayOneCard(recipe);
			}
		}
		Search.prototype.updateFilterAvailableTags(remainingResearches);
		// No valid answers
		if (document.getElementById('cards').innerHTML == '') {
			displayCards([]);
		}
	} 
	else {
		if (gTags.length > 0){
			const filteredRecipes = Search.prototype.filterByTag(gRecipes);
			Search.prototype.updateFilterAvailableTags(filteredRecipes);
		}
		else{
			reinitFilterButtons();
			displayCards(gRecipes);
		}
	}
});
