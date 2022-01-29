/**
 * Recipe container
 */
let gRecipes = [];

class Recipe {
  /**
   * Get List of ingredients for one recipe
   * @param {object} recipe
   * @returns
   */
  getIngredientsAsHTMLList(recipe) {
    let list = "";
    recipe.ingredients.forEach((ingredient) => {
      list += `
                <li>
                    <span class="bold close">${ingredient.ingredient}</span> 
                    ${
                      ingredient.quantity != undefined
                        ? `: ${ingredient.quantity}`
                        : ""
                    }
                    ${ingredient.unit != undefined ? ingredient.unit : ""}
                </li>
            `;
    });
    return list;
  }

  /**
   * Display single recipe card
   * @param {object} recipe
   * @param {string[]} ingredientList
   */
  addCard(recipe, ingredientList) {
    document.getElementById("cards").innerHTML += `
            <article class="recipe__card col-md-6 col-xl-4">
                <div class="recipe__card__image"></div> 
                <div class="recipe__card__body">
                    <div class="d-flex justify-content-between mb-2">
                        <span class="bold recipe__name">${recipe.name}</span>
                        <span class="bold"><i class="far fa-clock"></i> 
                            ${recipe.time}min
                        </span>
                    </div>

                    <div class="d-flex justify-content-between recipe__card--container">
                        <span> <ul class="recipe__ingredient-list"> ${ingredientList} </ul> </span>

                        <span class="col-6 recipe__description bold">
                            ${recipe.description.substr(0, 160)}... 
                        </span>
                    </div>
                </div>
            </article>
        `;
  }
}
