(function() {

	class HelpOption {
		
		constructor(label, description) {
			this.label = label;
			this.description = description;
			
			this.elem

		}

	}


	var optionsDict = [
		{"label" : "file complaint", "description" : "help", "link" : "#" },
		{"label" : "poop pants", "description" : "oh no", "link" : "#"},
		{"label" : "dont poop", "description" : "oh yess", "link" : "#"}
	]

	var filterList = [];

	// Include jQuery
	var head = document.getElementsByTagName('head').item(0);
	var jquerySrcTag = document.createElement('script');
	jquerySrcTag.setAttribute('type', 'text/javascript');
	jquerySrcTag.setAttribute('src', 'https://code.jquery.com/jquery-latest.min.js');
	head.appendChild(jquerySrcTag);

	// create outer container
	var div = document.createElement('div');
	div.setAttribute('class', 'dropdown-content');
	div.style.width = "25%";
	// div.style.background = "white";
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.style.zIndex = 1000;

	// Make it easy to add CSS rules to the page
	function addStyleString(str) {
		var node = document.createElement('style');
		node.innerHTML = str;
		document.body.appendChild(node);
	}

	// Make search bar expand when clicked
	var styleNode = document.createElement('style');
	addStyleString('input[type=text] {width: 40%; transition: ease-in-out, width .35s ease-in-out;}');
	addStyleString('input[type=text]:focus {width: 85%;}');
	

	// Change background color of links when hovered
	addStyleString('.dropdown-content {background-color: #f1f1f1;}');
	addStyleString('.dropdown-content a {padding: 12px 16px; display: block;}');
	addStyleString('.dropdown-content a:hover {background-color: #ddd;}');

	// create input html tag functionality
	var input = document.createElement('input'); // create html tag for input field
	input.setAttribute('id', 'help-ext-input');
	input.setAttribute('placeholder', 'Help');
	input.setAttribute('type', 'text');
	input.style.focus = "100%";
	input.addEventListener('keyup', filterFunction);
	input.addEventListener('keydown', arrowKeyFunction);

	// Create list to hold all of the options
	var ul = document.createElement('ul');
	ul.setAttribute('id','help-ext-ul');
	

	// Insert elements to the div container, and inject the div on the page.
	div.appendChild(input);
	div.appendChild(ul);
	document.body.appendChild(div);

	init();



//	$(document).ready(function() {
//		$('input'.keyup(function(e) {
//			if(e.which == 39) {
//				console.log('right arrow');
//			}
//		}));
//	});

	function filterFunction() {
			var filter, ul, li, a, i, input;
			
			input = document.getElementById('help-ext-input');

			inputString = input.value.toUpperCase();
			ul = document.getElementById('help-ext-ul');
			li = ul.getElementsByTagName("li");
			

			for (i = 0; i < li.length; i++) {
					a = li[i].getElementsByTagName("a")[0];

					// if any part of the inner body matches the query
					if (a.innerHTML.toUpperCase().indexOf(inputString) > -1) {
							li[i].style.display = "";
							filterList.push(li[i]);
					} else {
							li[i].style.display = "none";
							var idx = filterList.indexOf(li[i]);
							filterList.splice(idx, 1);
					}
			}



			ul.style.display = (inputString.length === 0) ? "none" : "";
			filterList = (inputString.length === 0) ? [] : filterList; // empty the list if no query 
	}

	let idx = -1;
	function arrowKeyFunction(e) {
		e = e || window.event;
		
		let ul, li;
		ul = document.getElementById('help-ext-ul');
		li = ul.getElementsByTagName('li');

		// Keyvalues: Up=38, Down=40, Right=39, Left=37
		switch(e.keyCode) {
			case 38: // move up if left or up arrow key
			case 37:
				idx = (idx === -1) ? idx : idx - 1;
				break;
			case 40:
			case 39:
				idx = (idx === li.length) ? idx :  idx + 1; // move down if right or down arrow key
				break;
			default:
				return;
		}

		console.log(idx);

	}



	function init() {
		
		// Inject HTML for the list of options
		for (var i = 0; i < optionsDict.length; i++) {
			ul.innerHTML += "<li style='display:none'><a href=" + optionsDict[i].link
								 + "><span style='color:red'>"
								 + optionsDict[i].label
								 + "</span> - " + optionsDict[i].description +"</a></li>";
		}
	}

})();
