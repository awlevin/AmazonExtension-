(function() {

	class HelpOption {
		
		constructor(label, link) {
			this.label = label;
			this.link = link;
			
			this.elem = $("<li><a></a></li>");
			this.elem
				.children()
				.first()
				.attr("href", link)
				.text(label)
		}

		show() {
			this.elem.addClass("visible")
		}

		hide() {
			this.elem.removeClass("visible")
		}

		setActive( isActive ) {
			if (isActive) 
				this.elem.children().first().addClass("active");
			else 
				this.elem.children().first().removeClass("active");
		}
	}

	var options = [
		new HelpOption("File Complaint", "https://www.amazon.com/gp/help/customer/display.html?nodeId=200783750"),
		new HelpOption("My Addresses", "https://www.amazon.com/a/addresses?ref_=ya_d_c_addr"),
		new HelpOption("1-Click settings", "https://www.amazon.com/cpe/manageoneclick?ref_=ya_d_l_change_1_click"),
		new HelpOption("Prime Pantry", "https://www.amazon.com/Prime-Pantry/b?ie=UTF8&node=7301146011"),
		new HelpOption("Prime Video", "https://www.amazon.com/Prime-Video/b?node=2676882011"),
		new HelpOption("Store Directory", "https://www.amazon.com/Prime-Video/b?node=2676882011"),
		new HelpOption("Alexa Skills",  "https://www.amazon.com/b?node=13727921011"),
		new HelpOption("Kindle", "https://www.amazon.com/Kindle-eBooks/b?ie=UTF8&node=154606011")
	]

	// create outer container
	var div = $("<div class='amzn-ext-list'></div>")

	// Create list to hold all of the options
	var ul = $("<ul class='help-ext-ul'</ul>")

	// create input html tag functionality
	var input = $("<input class='amzn-ext-search' placeholder='Help' type='text'/>")
		.keyup(filterFunction)
		.keydown(arrowKeyFunction)
		//.focusout( () => { ul.removeClass("visible")  })
		.focusin( () => { if (input.val().trim().length > 0) ul.addClass("visible") })



	// Insert elements to the div container, and inject the div on the page.
	div.append(input)
	div.append(ul)

	// INIT LIST
	for(let option of options) {
		ul.append(option.elem)
	}

	$(document.body).append(div)

	input.keypress(function(e) {
		if(e.which == 13) {
			window.location.href = options[idx].link
		}
	});

	function filterFunction() {			
			var inputString = input.val().toUpperCase();

			for (let option of options) {
				if (option.label.toUpperCase().indexOf(inputString.toUpperCase()) > -1) {
					option.show()
				}
				else {
					option.hide()
				}
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
