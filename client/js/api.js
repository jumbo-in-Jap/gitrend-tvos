//# sourceURL=api.js
_domElements = ""
_auctionItems = []
_response = []

var Api = {
	request: function(type, url, params, successHandler, falureHandler){
		httpRequest = new XMLHttpRequest();
		httpRequest.open(type, url, true);
		
		// completion
		httpRequest.onreadystatechange = function() {//Call a function when the state changes.
		    if(httpRequest.readyState == 4 && httpRequest.status == 200) {
                var responseJson =  JSON.parse(httpRequest.responseText);
		        successHandler(responseJson)
		    }else{
		    	falureHandler()
		    }
		}
		httpRequest.send();		
	},
    getTrend: function(lang, successHandler, falureHandler){
        var params = {}
        var url = "XXX"+encodeURIComponent(lang)
        this.request("GET", url, params,
                // Success
                function(response){
                    console.log("success")
                     _response = response
                    successHandler(response)
                },
                // failure
                    function(){console.log("failed")
                })
    }
}



/*
 
  
 * */