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

	class HelpLabel {
		constructor(text) {
			this.elem = $("<label for='amzn-ext-search'>" + text + "</label>")
		}
		
		show() {	
			this.elem.css("display", "inline")
		}

		hide() {
			this.elem.css("display", "none")
		}

	}

	var options = [
		new HelpOption("File Complaint", "https://www.amazon.com/gp/help/customer/display.html?nodeId=200783750"),
		new HelpOption("Return Center", "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.amazon.com%2Fgp%2Forc%2Freturns%2Fhomepage.html%2Fref%3Dorc_surl_ret_hp%3Ffg%3D1&h=ATMZwdSWx4USHEDPJUjVxExBcUmzMvFJskfNW1g6Vk9LXlQyUJywT5XYJQDsQFQwTqbqnynLRHRhV2YjFCE4t_H9DT6FLbgqy-k2cvpLCggFkPVzStB9kRFD"),
		new HelpOption("My Addresses", "https://www.amazon.com/a/addresses?ref_=ya_d_c_addr"),
		new HelpOption("1-Click settings", "https://www.amazon.com/cpe/manageoneclick?ref_=ya_d_l_change_1_click"),
		new HelpOption("Prime Pantry", "https://www.amazon.com/Prime-Pantry/b?ie=UTF8&node=7301146011"),
		new HelpOption("Prime Video", "https://www.amazon.com/Prime-Video/b?node=2676882011"),
		new HelpOption("Store Directory", "https://www.amazon.com/Prime-Video/b?node=2676882011"),
		new HelpOption("Alexa Skills",  "https://www.amazon.com/b?node=13727921011"),
		new HelpOption("Kindle", "https://www.amazon.com/Kindle-eBooks/b?ie=UTF8&node=154606011"),
		new HelpOption("More Help?", "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.html%2Fref%3Dfooter_gw_m_b_he%3Fie%3DUTF8%26nodeId%3D508510&h=ATMZwdSWx4USHEDPJUjVxExBcUmzMvFJskfNW1g6Vk9LXlQyUJywT5XYJQDsQFQwTqbqnynLRHRhV2YjFCE4t_H9DT6FLbgqy-k2cvpLCggFkPVzStB9kRFD")
	]

	// create outer container
	var div = $("<div class='amzn-ext-list'></div>")

	// Create list to hold all of the options
	var ul = $("<ul class='help-ext-ul'</ul>")

	var label = new HelpLabel("Amazon Nav Extension!");

	// create input html tag functionality
	var input = $("<input id='amzn-ext-search' class='amzn-ext-search' placeholder='Need Help?' type='text'/>")
		.keyup(filterFunction)
		.keydown(arrowKeyFunction)
		.focusout( () => { label.show()  })
		.focusin( () => { 
			if (input.val().trim().length > 0) ul.addClass("visible") 
			label.hide()
		})



	// Insert elements to the div container, and inject the div on the page.
	div.append(input)
	div.append(ul)
	div.append(label.elem)

	// INIT LIST
	for(let option of options) {
		ul.append(option.elem)
	}

	$(document.body).append(div)

	input.keypress(function(e) {
		if (e.which == 13) {
			window.location.href = options[idx].link
		}
	});

	let idx = -1;
	let optsShown = []
	var oldString;
	function filterFunction(e) {			
			var inputString = input.val().toUpperCase();

			for (let option of options) {
				if (option.label.toUpperCase().trim().indexOf(inputString.toUpperCase().trim()) > -1) {
					if (!optsShown.includes(option)) optsShown.push(option);
					option.show()
				}
				else {
					option.hide()
					optsShown.pop(option);
				}
			}

			if (inputString.length === 0) 
				ul.removeClass("visible")
			else 
				ul.addClass("visible")
	}

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
				idx = (idx === optsShown.length) ? idx :  idx + 1; // move down if right or down arrow key
				break;
			default:
		}

		for (let i = 0; i < optsShown.length; i++) {
			optsShown[i].setActive( i === idx );
		}
	}
})();
