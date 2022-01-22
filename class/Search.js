class Search {
   
    /**
     * When search bar has a content length of 3+ char, this should be used
     * @param {string} value - the searched value in UPPERCASE 
     * @returns 
     */
    filterFromSearchBar(value) {
        const filteredResearches = [];
        for (const recipe of gRecipes) {
			if (
				recipe.name.toUpperCase().includes(value) ||
				recipe.description.toUpperCase().includes(value)
			) {
				filteredResearches.push(recipe);
			}

			for (const ingredient of recipe.ingredients) {
				if (ingredient.ingredient.includes(value)) {
					filteredResearches.push(recipe);
				}
			}
		}
        return filteredResearches;
    }

    /**
     * Filter available recipes if one or more tag have been chosen
     * To create an intersection, it is needed to make sure every recipe will match ALL of the tags
     * Thus, we create a counter and increment it each time a tag is present in a recipe
     * if number of match equals size of tag array, then all the tags are present in current recipe which is then valid
     * Displays related cards
     * GLOBALS : gTags
     * @param {object[]} recipes - array of recipes to filter
     * @returns array containing filtered by tag recipes
     */
    filterByTag(recipes){
        const remainingResearches = [];
        for (const recipe of recipes){
            let nbMatch = 0;
            for (const tag of gTags){
                if (tag.type == "ingredients" && this.containsIngredient(recipe.ingredients, tag.name)) {
                    nbMatch++;
                }
            }
            for (const tag of gTags){
                if (tag.type == "appareils" && this.containsAppliance(recipe.appliance, tag.name)) {
                    nbMatch++;
                }
            }
            for (const tag of gTags){
                if (tag.type == "ustensiles" && this.containsUstensil(recipe.ustensils, tag.name)) {
                    nbMatch++;
                }
            } 
            if (nbMatch == gTags.length){
                remainingResearches.push(recipe);
                displayOneCard(recipe);
            }
        }
        return remainingResearches;
    }

    updateFilterAvailableTags(recipes){
		const availableIngredients = [];
		const availableAppliance = [];
		const availableUstensils = [];
		for (const recipe of recipes){
			// Fouiller ingredients et update filter[0]
			for (const ingredientObj of recipe.ingredients){
				if(!isIncluded(ingredientObj.ingredient, availableIngredients)){
					availableIngredients.push(ingredientObj.ingredient);
				}
			}
			// Fouiller Appareils et update filter[1]
			if (!isIncluded(recipe.appliance, availableAppliance)){
				availableAppliance.push(recipe.appliance);
			}			
			// Fouiller 
			for (const ustensil of recipe.ustensils){
				if(!isIncluded(ustensil, availableUstensils)){
					availableUstensils.push(ustensil);
				}
			}
		}

		//update btns and regenerate
		gFilterButtons[0].referencesInfo = availableIngredients;
		gFilterButtons[1].referencesInfo = availableAppliance;
		gFilterButtons[2].referencesInfo = availableUstensils;
    }

    defineAvailableFilterTagsAndRecipes(){
        const search = document.getElementById("searchbar").value;
        document.getElementById('cards').innerHTML = '';
        if (search.length < 3){ 
            const x = this.filterByTag(gRecipes);
            this.updateFilterAvailableTags(x);
        }
        else{
            const filteredRecipes = this.filterFromSearchBar(search.toUpperCase());
            this.filterByTag(filteredRecipes);
        }
    }
    

    /**
     * Helper function to find ingredient in a recipe 
     * @param {object[]} ingredients 
     * @param {string} tagName
     * @returns 
     */
    containsIngredient(ingredients, tagName){
        for (const ingredientObj of ingredients){
            if (ingredientObj.ingredient == tagName){
                return true;
            }
        }
        return false;
    }

    /**
     * Helper function to find Appliance in a recipe
     * As there is only one appliance per recipe, a direct comparison return is enough
     * @param {string} appliance 
     * @param {string} tagName 
     * @returns 
     */
    containsAppliance(appliance, tagName){
        return appliance == tagName;
    }

    /**
     * Helper function to find usternsil in a recipe
     * @param {object[]} ustensils 
     * @param {string} tagName 
     * @returns 
     */
    containsUstensil(ustensils, tagName){
        for (const ustensil of ustensils){
            if (ustensil == tagName){
                return true;
            }
        }
        return false;
    }
}