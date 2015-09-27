var Logger = {
	
	out: function(text){
		console.log(text)
		httpRequest = new XMLHttpRequest();
		httpRequest.open('GET', 'http://localhost:9001/logger.py?logtext='+text, true);
		httpRequest.send(null);
	}
		
}

var Request = {
	
}
