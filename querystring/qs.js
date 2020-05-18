/*
	Looks through all the name=value pairs for one with a name matching fieldName.
	If it find a match, returns the value. If no match, returns null.
*/
function searchQueryString (fieldName) {
	// Store all values for names that match the fieldName
	var matchingValues = [];

	// Store the query string portion of the URL
	var queryString = location.search;

	// Remove the "?" with substring
	// Then split into an array of strings over the "&"
	var queryStringSplit = queryString.substring(1).split("&");

	// Loop through the array of strings
	// Each string should look like "name=value"
	for (var i = 0; i < queryStringSplit.length; i++) {
		// Store the string in a variable for convenience
		var nameValuePair = queryStringSplit[i];
		// Spaces decode as plusses so they must be replaced
		nameValuePair = nameValuePair.replace(/\+/g, "%20");		
		// Convert from web encoding
		nameValuePair = decodeURIComponent(nameValuePair);
		// Find the index of the first "=" character
		var indexOfEquals = nameValuePair.indexOf("=");
		// Substring everything up to (not including) the "="
		var name = nameValuePair.substring(0, indexOfEquals);
		if (name == fieldName) {
			// Substring everything after the "="
			var value = nameValuePair.substring(indexOfEquals + 1);
			// Store this matching value
			matchingValues.push(value);
		}
	}
	
	return matchingValues;
}