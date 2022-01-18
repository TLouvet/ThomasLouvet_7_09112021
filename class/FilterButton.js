class FilterButton {
	constructor(name, background, id, linkedInfo) {
		this.isFocused = false;
		this.name = name;
		this.background = background;
		this.id = id;
		this.linkedInfo = linkedInfo;
	}

	/**
	 * Original display of a button
	 */
	create() {
		document.getElementById('filter-section').innerHTML += `
			<div id=${this.id} class="col-5 col-sm-4 col-md-2 me-3 white btn--${this.background} btn__filter d-flex justify-content-between">
				<span> ${this.name} </span>
				<span><i class="fas fa-chevron-down"></i></span>
			</div>
		`;
	}

	/**
	 * When closing a button, generate its original form
	 */
	regenerate(){
		document.getElementById(this.id).outerHTML = `
			<div id=${this.id} class="col-5 col-sm-4 col-md-2 me-3 white btn--${this.background} btn__filter d-flex justify-content-between">
				<span> ${this.name} </span>
				<span><i class="fas fa-chevron-down"></i></span>
			</div>
		`;
		this.addListener();
	}
	/**
	 * Button is transformed into an input with list when clicked
	 */
	addListener() {
		const selector = document.getElementById(this.id);
		selector.addEventListener('click', (e) => {
			
			if (this.isFocused && e.target.id === `${this.id}-input`){
				return;
			}
			else if (!this.isFocused) {
				selector.outerHTML = `
					<div id=${this.id} class="col-6 me-3 white btn--${this.background} btn__filter d-flex justify-content-between">
						<input class="input input--${this.background} me-2" id='${this.id}-input' type="text" placeholder="Rechercher un ${this.name}" />
						<span><i class="fas fa-chevron-up"></i></span>
					</div>	
				`;
				//Ok we need to generate info related - let's first gather it
				
				// -> this list either comes from recipes

				// -> either from fuckedrecipes

				//Close other btns -- problem

				this.isFocused = true;
				this.addListener();
			}
			else{
				this.isFocused=false;
				this.regenerate();
			}
		});
	}

}
