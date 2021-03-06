
//JSON http REQUEST

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://api.myjson.com/bins/ljart');
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
	var mainDisplay = document.getElementById("display");
	var htmlString = "";
	
	for (var i = 0; i < data.cars.length; i++) {
		htmlString += "<article class='displayBox'>" + "<div class='displayBox__inner'>" + "<div class='displayBox__face'>" + "<img src='" + data.cars[i].image + "' />" + "<h2>" + data.cars[i].name + "</h2>" + "</div>" + "</div>" + "</article>";
	
	}
	mainDisplay.insertAdjacentHTML('beforeend', htmlString);

	// Add descriptio in car-box
	function addDescription(data) {
		var carBox = document.getElementsByClassName("displayBox__inner");
		var descriptionString = "";
		for(var z = 0; z < data.cars.length; z++) {
			descriptionString += "<div class='displayBox__back'>" + "<p>" + data.cars[z].description + "</p>" + "<p>" + "Max-speed: "+ data.cars[z].speed + "</p>" + "</div>";
			// for(var j = 0; j < carBox.length; j++) {
				carBox[z].insertAdjacentHTML('beforeend', descriptionString);
				descriptionString = "";
 			// }
		}
	}
	addDescription(data);

	// Add speed limits
	function addSpeedLimits(data) {
		var speedSigns = document.getElementById("speedLimits");
		var sign = "";
		for(var n = 0; n < data.speed_limits.length; n++) {
			sign += "<span class='speedLimits__sign'>" + data.speed_limits[n].speed + "</span>";
		}
		speedSigns.insertAdjacentHTML('beforeend', sign);
		function limitsPosition(data) {
			var signPlace = document.getElementsByClassName("speedLimits__sign");
			var positionNumber = "";
			for(var x = 0; x < signPlace.length; x++) {
				positionNumber += data.speed_limits[x].position;
				var dd = positionNumber+ "%";
				signPlace[x].style.left = dd;
				positionNumber = "";
			}
		}
		limitsPosition(data); 
	}
	addSpeedLimits(data);
	// TRAFFIC LIGHTS

	var lightStates = {red:0, green:1};
	var currentState = lightStates.red;

	var timeInterval = data.traffic_lights[0].duration;
	console.log(timeInterval);

	function launchLights() {
	    setInterval(function(){
	    	changeState(); }, timeInterval);
	}

	function changeState() {
	  	clear();
	    switch(currentState) {
	        case lightStates.red: {
	      	document.getElementById("red").className ="light red";
	      	currentState = lightStates.green;
	    }
	    break;
	    	case lightStates.green: {
	      	document.getElementById("green").className ="light green";
	     	currentState = lightStates.red;
	    } 
	    break;
	   }
	}

	function clear(){
	   document.getElementById("red").className ="light off";
	   document.getElementById("green").className ="light off";
	}
	launchLights(data);

	// SELECT CAR BOX and add to START POSITION
	function selectBox() {
		var thisBox = document.getElementsByClassName("displayBox__inner");
		var startPosition = document.getElementById("start");
		for (i = 0; i < thisBox.length; i++) {
		    thisBox[i].addEventListener("click", function (e) {
                console.log(this.childNodes[0]);
                var car = this.childNodes[0].cloneNode(true);
                startPosition.appendChild(car);
            });
		}
	}
	selectBox();
}


// FILTER CARS ON INPUT SERACH

function filterCars() {
    var input, filter, filterDisplay, articleBox, carTitle, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    filterDisplay = document.getElementById("display");
    articleBox = filterDisplay.getElementsByTagName("article");
    for (i = 0; i < articleBox.length; i++) {
        carTitle = articleBox[i].getElementsByTagName("h2")[0];
        if (carTitle.innerHTML.toUpperCase().indexOf(filter) > -1) {
            articleBox[i].style.display = "";
        } else {
            articleBox[i].style.display = "none";

        }
    }
}
	


