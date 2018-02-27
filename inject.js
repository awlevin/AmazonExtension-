(function() {

	class HelpOption {
		
		constructor(label, description, link) {
			this.label = label;
			this.description = description;
			
			this.elem = $("<li><a></a></li>");
			this.elem
				.children()
				.first()
				.attr("href", link)
				.append( $("<span></span>").text(label + " - "))
				.append( $("<span></span>").text(description))
		}

		show() {
			this.elem.addClass("visible")
		}

		hide() {
			this.elem.removeClass("visible")
		}

		setActive( isActive ) {
			if (isActive) 
				this.elem.addClass( "active" )
			else 
				this.elem.removeClass( "active" )
		}
	}

	var options = [
		new HelpOption("file complaint", "help", "#"),
		new HelpOption("poop pants", "oh no", "#"),
		new HelpOption("dont poop", "oh yess", "#")
	]


	// create outer container
	var div = $("<div class='amzn-ext-list'></div>")

	// create input html tag functionality
	var input = $("<input class='help-ext-input' placeholder='help' type='text'/>")
		.keyup(filterFunction)
		.keydown(arrowKeyFunction)

	// Create list to hold all of the options
	var ul = $("<ul class='help-ext-ul'</ul>")

	// Insert elements to the div container, and inject the div on the page.
	div.append(input)
	div.append(ul)

	// INIT LIST
	for(let option of options) {
		ul.append(option.elem)
	}

	$(document.body).append(div)

	function filterFunction() {			
			var inputString = input.val().toUpperCase();

			for (let option of options) {
				if (option.label.toUpperCase().indexOf(inputString.toUpperCase()) > -1)
					option.show()
				else
					option.hide()
			}

			if (inputString.length === 0) 
				ul.removeClass("visible")
			else
				ul.addClass("visible")
	}

	let idx = -1;
	function arrowKeyFunction(e) {
		e = e || window.event;
		
		e.stopPropagation();

		// Keyvalues: Up=38, Down=40, Right=39, Left=37
		switch(e.keyCode) {
			case 38: // move up if left or up arrow key
			case 37:
				idx = (idx === -1) ? idx : idx - 1;
				break;
			case 40:
			case 39:
				idx = (idx === options.length) ? idx :  idx + 1; // move down if right or down arrow key
				break;
			default:
				return;
		}

		for (let i = 0; i < options.length; i++) {
			options[i].setActive( i === idx );
		}
	}
})();
