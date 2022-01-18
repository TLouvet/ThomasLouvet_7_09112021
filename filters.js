const filterNames = [
	new FilterButton('Ingrédients', 'blue', 'ingredients', 'ingredients'),
	new FilterButton('Appareil', 'green', 'appareils', 'appliance'),
	new FilterButton('Ustensiles', 'red', 'ustensiles', 'ustensils'),
];

/**
 * Construct the 3 search btns
 */
function createFilterButtons() {
	filterNames.forEach((f) => {
		f.create();
	});
	filterNames.forEach((f) => f.addListener());
}

createFilterButtons();