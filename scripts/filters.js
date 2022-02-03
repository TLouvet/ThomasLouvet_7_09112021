/**
 * Filters.js 
 * Contains functions related to filter generation / Modification, on global page
 * GLOBALS : gFilterButtons
 */

/**
 * Construct the 3 search btns
 */
async function createFilterButtons() {
	const baseInfo = await Promise.all([
		getAllUniqueIngredients(),getAllUniqueAppliances(),getAllUniqueUstensils()
	])	

	const filterNames = [
		new FilterButton('Ingrédients', 'blue', 'ingredients', baseInfo[0], "ingrédient"),
		new FilterButton('Appareil', 'green', 'appareils', baseInfo[1], "appareil"),
		new FilterButton('Ustensiles', 'red', 'ustensiles', baseInfo[2], "ustensil"),
	];

	// It seems unlogical, but putting both instructions in a single forEach does not work
	filterNames.forEach((f) => f.create());
	filterNames.forEach((f) => f.addListener());
	return filterNames;
}

/**
 * Fill reference array for all filter buttons
 */
async function reinitFilterButtons(){
	const baseInfo = await Promise.all([
		getAllUniqueIngredients(),getAllUniqueAppliances(),getAllUniqueUstensils()
	])

	for (let i = 0 ; i < gFilterButtons.length; i++){
		gFilterButtons[i].referencesInfo = baseInfo[i]
	}
}

/**
 * Collapse filter buttons that are expanded
 */
function collapseFilters(){
	for (const btn of gFilterButtons){
		if (btn.isExpanded){
			btn.regenerate();
		}
	}
}

