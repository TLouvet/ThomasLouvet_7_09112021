let gTags = [];

/**
 * Abstract class used to perform Add, Display & Remove on Tags: 
 */
class Tags {

    /**
     * Adds sa new tag
     * GLOBALS : gTags
     * @param {string} type 
     * @param {string} name 
     */
    addTag(type, name, color){
        if (!this.isAlreadyIncludedTag(type, name)){
            gTags.push({ type: type, name: name });
            this.displayTag(type, name, color)
        }
        Search.prototype.defineAvailableFilterTagsAndRecipes();
    }

    /**
     * Helper function checking if a tag is in tags array
     * GLOBALS : gTags
     * @param {string} type 
     * @param {string} name 
     * @returns boolean
     */
    isAlreadyIncludedTag(type, name){
        for (const tag of gTags){
            if (tag.type == type && tag.name == name){
                return true;
            }
        }

        return false;
    }

    displayTag(tagType, tagName, color){
        const filter = document.getElementById(`${tagType}-container`);
        const newTag = document.createElement("div");
        newTag.setAttribute('id', `${tagName}-filter`);
        newTag.setAttribute('class', `tag__container tag--${color}` )
        newTag.innerHTML = `<span>${tagName}<span> <button class="tag__quit tag--${color} " onclick="Tags.prototype.removeOneTag('${tagType}', '${tagName}')" > <i class="far fa-times-circle"></i> </button> `;
        filter.insertBefore(newTag, filter.firstChild);

    }

    /**
     * Remove a tag and update available tags & recipes
     * GLOBALS: gTag
     * @param {string} tagType 
     * @param {string} tagName 
     */
    removeOneTag(tagType, tagName){
        document.getElementById(`${tagName}-filter`).remove();
        const index = gTags.findIndex(tag => tag.type == tagType && tag.name == tagName);
        gTags.splice(index,1);
        Search.prototype.defineAvailableFilterTagsAndRecipes();
    }
}