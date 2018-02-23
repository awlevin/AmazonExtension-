(function() {

	var optionsDict = [
		{"label" : "file complaint", "description" : "help", "link" : "#" },
		{"label" : "poop pants", "description" : "oh no", "link" : "#"},
		{"label" : "dont poop", "description" : "oh yess", "link" : "#"}
	]

	// create outer container
	var div = document.createElement('div');
	div.style.width = "25%";
	div.style.background = "white";
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
	

	// create input html tag functionality
	var input = document.createElement('input'); // create html tag for input field
	input.setAttribute('id', 'help-ext-input');
	input.setAttribute('placeholder', 'Help');
	input.setAttribute('type', 'text');
	input.style.focus = "100%";
	input.addEventListener('keyup', filterFunction);

	// Create list to hold all of the options
	var ul = document.createElement('ul');
	ul.setAttribute('id','help-ext-ul');
	
	// Insert elements to the div container, and inject the div on the page.
	div.appendChild(input);
	div.appendChild(ul);
	document.body.appendChild(div);

	init();

	function filterFunction() {
			var filter, ul, li, a, i, input;
			
			input = document.getElementById('help-ext-input');

			inputString = input.value.toUpperCase();
			ul = document.getElementById('help-ext-ul');
			li = ul.getElementsByTagName("li");
			console.log(li);
			
			for (i = 0; i < li.length; i++) {
					a = li[i].getElementsByTagName("a")[0];
					
					// if any part of the inner body matches the query
					if (a.innerHTML.toUpperCase().indexOf(inputString) > -1) {
							li[i].style.display = "";
					} else {
							li[i].style.display = "none";
					}
			}

			console.log(inputString.length);
			ul.style.display = (inputString.length === 0) ? "none" : "";


	}


	function init() {

		for (var i = 0; i < optionsDict.length; i++) {
			ul.innerHTML += "<li style='display:none'><a href=" + optionsDict[i].link
								 + "><span style='color:red'>"
								 + optionsDict[i].label
								 + "</span> - " + optionsDict[i].description +"</a></li>";
		}
	}

})();
