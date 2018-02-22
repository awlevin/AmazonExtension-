(function() {

	var optionsDict = [
		{"label" : "file complaint", "description" : "help" },
		{"label" : "poop pants", "description" : "oh no"},
		{"label" : "dont poop", "description" : "oh yess"}
	]

	// create outer container
	var div = document.createElement('div');
	div.style.width = "300px";
//	div.style.height = "100px";
	div.style.background = "white";
//	div.style.color = "white";
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.style.zIndex = 1000;

	// create input html tag functionality
	var input = document.createElement('input'); // create html tag for input field
	input.setAttribute('id', 'help-ext-input');
	input.addEventListener('keyup', filterFunction);

	// create list of items
	var ul = document.createElement('ul');
	ul.setAttribute('id','help-ext-ul');
	
	//document.body.appendChild(ul);
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
			ul.innerHTML += "<li style='display:none'><a href='#'><span style='color:red'>"
								 + optionsDict[i].label
								 + "</span> - " + optionsDict[i].description +"</a></li>";

		}
	}

})();
