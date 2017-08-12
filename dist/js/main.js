
//JSON http REQUEST

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://api.myjson.com/bins/vwuax');
ourRequest.onload = function() {
	if(ourRequest.status >= 200 && ourRequest.status < 400) {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	} else {
		console.log("We connected to the server, but it returned error.");
	}
}
ourRequest.onerror = function() {
	console.log("Connection error")
};

ourRequest.send();

//RENDERING HTML

function renderHTML(data) {
	var carBox = document.getElementById("display");
	var htmlString = "";
	
	for (var i = 0; i < data.cars.length; i++) {
		htmlString += "<article class='displayBox'>" + "<div class='displayBox__inner'>" + "<img src='" + data.cars[i].image + "' />" + "<h2>" + data.cars[i].name + "</h2>" + "</div>" + "</article>";
	
	}

	carBox.insertAdjacentHTML('beforeend', htmlString);
}

var x = document.getElementsByClassName('displayBox__inner');
console.log(x.length);