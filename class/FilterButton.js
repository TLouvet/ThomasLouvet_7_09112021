class FilterButton {
	constructor(name, background, id) {
		this.isFocused = false;
		this.name = name;
		this.background = background;
		this.id = id;
	}

	/**
	 * Original display of a button
	 */
	create() {
		document.getElementById('filter-section').innerHTML += `
			<div id=${this.id} class="col-5 col-sm-4 col-md-2 ${this.background}  me-3 white filter d-flex justify-content-between">
				<span> ${this.name} </span>
				<span><i class="fas fa-chevron-down"></i></span>
			</div>
		`;
	}

	/**
	 * Button is transformed into an input with list when clicked
	 */
	addListener() {
		const selector = document.getElementById(this.id);
		selector.addEventListener('click', () => {
			if (!this.isFocused) {
				//This needs to be improved
				selector.innerHTML = `
					<input style="width:100% " id='${this.id}-input' type="text" placeholder="Rechercher un ${this.name}" />
					<span><i class="fas fa-chevron-up"></i></span>
				`;
				this.isFocused = true;
			}
		});
	}
}
