/**
 * Init.js 
 * Initialise global variables on page load
 * GLOBALS : gRecipes
 */

/**
 * Load recipes[] with each available recipe 
 */
 getAllRecipes()
 .then(rec => {
     gRecipes = rec.recipes;
     displayCards(rec.recipes);
    })
 .catch();

/**
 * Creation of filter Btns 
 */
createFilterButtons()
.then( btns => gFilterButtons = btns)
.catch();

/**
 * Auto collapse any filter when searching on the main searchbar
 */
document.getElementById('searchbar')
.addEventListener('focus', () => {
	collapseFilters();
})