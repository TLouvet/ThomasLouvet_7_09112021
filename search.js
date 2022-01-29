// The aim of this variable is to avoid rerendering unnecessarily when searchbar is < 3 chars
let is3Char = false;

/**
 * Search algorithm
 */
document.getElementById('searchbar').addEventListener('input', (e) => {
	
	if (e.target.value.length >= 3) {
    document.getElementById('cards').innerHTML = '';
    is3Char = true;
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
		else if (is3Char){
      document.getElementById('cards').innerHTML = '';
      is3Char = false;
			reinitFilterButtons();
      displayCards(gRecipes);
		}
	}
});
