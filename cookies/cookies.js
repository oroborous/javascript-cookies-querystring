function createCookie (cookieName, cookieValue, daysTillExpires, path) {
	// The expiration date for this cookie
	// If blank, cookie expires when browser is closed
	var expires = "";
	// Was an expiration specified?
	if (daysTillExpires) {
		// Get a new date object, which will be set to the current date/time
		var date = new Date();
		// Update the time to be in the future
		date.setTime(date.getTime() + (daysTillExpires * 24 * 60 * 60 * 1000));
		// Make a string to add to the cookie
		expires = ";expires=" + date.toUTCString();
	}
	// The path for which this cookie is valid
	// If not specified, defaults to path of current page
	var pathValue = "";
	if (path) {
		pathValue = ";path=" + path;
	}
	// Set the cookie
	document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + expires + pathValue;
}

function readCookie (cookieName) {
	// Concatenate equals sign onto cookie name
	var searchName = cookieName + "=";
	// Where is "cookieName=" ?
	var indexOfName = document.cookie.indexOf(searchName);
	// Name not found, return null
	if (indexOfName === -1) {
		return null;
	}
	// The value starts afters the equals sign
	var startOfValue = searchName.length + indexOfName;
	// Find the semicolon that ends the value
	var indexOfSemicolon = document.cookie.indexOf(";", startOfValue);
	// Variable to hold the value
	var cookieValue;
	// The last cookie doesn't end with a semicolon
	if (indexOfSemicolon === -1) {
		// Slice from the start of value to the end of the string
		cookieValue = document.cookie.slice(startOfValue);
	} else {
		// Slice out the value
		cookieValue = document.cookie.slice(startOfValue, indexOfSemicolon);
	}
	// Decode any characters that were encoded (space, comma, semicolon)
	return decodeURIComponent(cookieValue);
}

function deleteCookie (cookieName) {
	/*
	 * Remove a cookie by creating a blank one with the same name
	 * and making it expire in the past.
	 */
	this.createCookie(cookieName, " ", -1);
}
