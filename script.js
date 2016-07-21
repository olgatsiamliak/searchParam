$(document).ready(function () {
    $('#linkBtn').click(function () {
    	window.open().location.assign('https://onliner.by');
    })
}) 

function getSearchParams () {
	var link = window.location.search.substr(1);
	var arr = link.split('&');
    var searchElement = arr.map( function (str) {
	    var separator = str.indexOf('=');
	    if (separator == -1) return {
	    	key: str,
	    	value: null
	    }
	    else return {
	    	key: str.substring(0, separator),
	    	value: str.substring(separator + 1)
	    }
    });
    var objectFinal = {};
    for (var i = 0; i < searchElement.length; i++) {
  
    	var pair = searchElement[i];
        if ( pair.key in objectFinal ) {
        	var existingValue = objectFinal[pair.key];
             if (typeOf(existingValue) == 'string' ||  existingValue === null) {
				objectFinal[pair.key] = [existingValue, pair.value];
             } else {
             	existingValue.push(pair.value);
             }
        } else {
        	objectFinal[pair.key] = pair.value;
        }
    }
	
}