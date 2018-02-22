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
	div.setAttribute('id', 'poopie');

	// create input html tag functionality
	var input = document.createElement('input'); // create html tag for input field
	var keyupAtt = document.createAttribute('onkeyup'); // create attribute for keystrokes
	keyupAtt.value = "filterFunction"; // set value for each keystroke
	input.setAttributeNode(keyupAtt); // add attribute to html tag

	// create list of items
	var ul = document.createElement('ul');
	var ulid = document.createAttribute('id');
	ulid.value = 'myUL';
	ul.setAttributeNode(ulid);
	
	//document.body.appendChild(ul);
	div.appendChild(input);
	div.appendChild(ul);

	document.body.appendChild(div);

	init();



	function filterFunction() {
			console.log("a");
			var filter, ul, li, a, i;
			
			filter = input.value.toUpperCase();
			ul = document.createElement('ul');
			li = ul.getElementsByTagName("li");
			
			for (i = 0; i < li.length; i++) {
					a = li[i].getElementsByTagName("a")[0];
					if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
							li[i].style.display = "";
					} else {
							li[i].style.display = "none";

					}
			}
	}


	function init() {

		for (var i = 0; i < optionsDict.length; i++) {
			ul.innerHTML += "<li><a href='#'><span style='color:red'>"
								 + optionsDict[i].label
								 + "</span> - " + optionsDict[i].description +"</a></li>";
		}
	}

})();
