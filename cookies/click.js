$(document).ready(function () {

    function clickImage() {
        // Get the ID of the image that was clicked
        var imageId = this.id;
        // Get the cookie value using the imageId as the cookie name
        var clickCount = readCookie(imageId);
        // If such a cookie exists...
        if (clickCount) {
            // ... convert it to a number
            clickCount = parseInt(clickCount);
        } else {
            // ... otherwise, initialize to zero
            clickCount = 0;
        }
        // Create/update the cookie with the new value
        createCookie(imageId, ++clickCount);
    }

    function clearAllCookies() {
        // For every anchor tag, erase the cookie with a name
        // that equals the anchor's ID
        $("a").each(function (index, element) {
            eraseCookie(element.id);
        });
        // Forward to the count page
        window.location = "count.html";
    }

    function clearOneCookie() {
        var cookieType = $(this).data("cookie-name");
        eraseCookie(cookieType);
        // Forward to the count page
        window.location = "count.html";
    }


    // All anchor tags call clickImage() when clicked
    $("a").click(clickImage);

    $("td button").click(clearOneCookie);

    // Button clears the cookies
    $("button#clearCookiesButton").click(clearAllCookies);
});
