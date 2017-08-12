//Static JSON call

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://api.myjson.com/bins/yzexp');
ourRequest.onload = function() {
	var ourData = ourRequest.responseText;
}

ourRequest.send();