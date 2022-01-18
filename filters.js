const filterNames = [
	new FilterButton('Ingrédients', 'bg-primary', 'ingredients'),
	new FilterButton('Appareil', 'bg-success', 'appareils'),
	new FilterButton('Ustensiles', 'bg-danger', 'ustensiles'),
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
