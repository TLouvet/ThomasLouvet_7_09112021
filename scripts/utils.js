/**
 * Helper function to know if an element is included when looking for unique values
 * @param {string} singleData 
 * @param {string[]} array 
 * @returns 
 */
 function isIncluded(singleData, array){
    for (const entry of array){
        if (entry.localeCompare(singleData, "fr", {sensitivity: "base", ignorePunctuation:true}) == 0){
            return true;
        }
    }
    return false;
}