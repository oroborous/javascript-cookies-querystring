$(document).ready(function () {
    // For every div tag on the page
    $("span").each(
        function (index, element) {
            // Element contains the div as a plain DOM object
            // Get its ID
            var id = element.id;
            // Get the value of the cookie with the div's ID as its name
            var clickCount = readCookie(id);
            // If such a cookie exists...
            if (clickCount) {
                // ... convert its value to a number
                clickCount = parseInt(clickCount);
            } else {
                // ... otherwise initialize to zero
                clickCount = 0;
            }
            // Wrap the plain DOM object in a jQuery object
            var span = $(element);
            // Update the div's text
            span.html(clickCount + " click" + (clickCount == 1 ? "" : "s"));
        }
    );
});