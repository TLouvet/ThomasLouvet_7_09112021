/**
 * Array containing filter buttons
 */
 let gFilterButtons = []

class FilterButton {
	constructor(name, background, id, reference, description) {
		this.name = name;
		this.background = background;
		this.id = id;
		this.referencesInfo = reference;
		this.isExpanded = false;
    this.description = description;
	}

	/**
	 * Original display of a button*
   * MISSING EXPANDED VERSION 
	 */
	create() {
		document.getElementById('filter-section').innerHTML += `
			<button type="button" id="${this.id}" class="col-sm-12 me-3 white btn--no-expand btn--${this.background} btn__filter d-flex justify-content-between">
				<span> ${this.name} </span>
				<span><i class="fas fa-chevron-down"></i></span>
			</button>
		`;
	}

	/**
	 * When closing a button, generate its original form
	 */
	regenerate(){
		document.getElementById(this.isExpanded ? `${this.id}-expanded` : this.id).outerHTML = `
			<button type="button" id="${this.id}" class="col-sm-12 me-3 white btn--no-expand btn--${this.background} btn__filter d-flex justify-content-between">
				<span> ${this.name} </span>
				<span><i class="fas fa-chevron-down"></i></span>
			</button>
		`;
		this.isExpanded = false;
		this.addListener();
	}

	/**
	 * Filter Version when clicked
	 * @param {string[]} list 
	 * @returns 
	 */
	createExpandedVersion(list){
		return `
			<div id="${this.id}-expanded" class="col-sm-12 col-md-6 me-3 white btn--${this.background} btn__filter expanded">
				<div class="d-flex justify-content-between mb-3">
					<input class="input input--${this.background} me-2" id='${this.id}-input' type="text" placeholder="Rechercher un ${this.description}" />
					<span><i class="fas fa-chevron-up"></i></span>
				</div>	
				<ul id="${this.id}-list" class="d-flex flex-wrap m-0 p-0">
					${list}
				</ul>
			</div>
		`;
	}

	/**
	 * Create initial list of elements to display when button is clicked
	 * @returns 
	 */
	getReferenceAsListElements(){
		let list = '';
		for (let i = 0; i < this.referencesInfo.length; i++){
			list += `
				<li class="col-4 no-style-list text-start mb-2 clickable clickable--${this.background}"
					onclick="Tags.prototype.addTag('${this.id}', '${this.referencesInfo[i]}', '${this.background}')">
					${this.referencesInfo[i]}
				</li>
			`;
		}
		return list;
	}

  /**
   * Filter input event
   * Either it's at least 3 chars long and a search is made in the related tags
   * Either it's less than 3 chars long and every available tag in reference list is displayed
   */
	onSearch(){
		const input = document.getElementById(`${this.id}-input`);
		input.focus();
		input.addEventListener('input', (e) => {
			if (e.target.value.length >= 3){
				// regenerate list
				let list = '';
				for (const element of this.referencesInfo){
					if (element.toUpperCase().includes(e.target.value.toUpperCase())){
						list += `
							<li class="col-4 no-style-list text-start mb-2 clickable clickable--${this.background}"
								onclick="Tags.prototype.addTag('${this.id}', '${element}', '${this.background}')">
								${element}
							</li>
						`;
					}
				}
				document.getElementById(`${this.id}-list`).innerHTML = list;
			}
			else{
				const list = this.getReferenceAsListElements();
				document.getElementById(`${this.id}-list`).innerHTML = list;
			}
		})
		
	}

	/**
	 * Button is transformed into an input with list when clicked
	 */
	addListener() {
		const selector = document.getElementById(this.isExpanded ? `${this.id}-expanded` : this.id);
		selector.addEventListener('click', (e) => {
			
			if (this.isExpanded && e.target.id === `${this.id}-input`){
				return;
			}
			else if (!this.isExpanded) {
				collapseFilters();
				this.isExpanded = true;
				const list = this.getReferenceAsListElements();
				selector.outerHTML = this.createExpandedVersion(list);
				this.onSearch();
				this.addListener();
			}
			else{
				this.regenerate();
			}
		});
	}
  
  setReferences(ref){
    this.referencesInfo = ref;
  }
}
