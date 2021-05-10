$(document).ready(function () {
    // All anchor tags call clickImage() when clicked
    $("a").on("click", clickImage);

    $("td button").on("click", clearOneCookie);

    // Button clears the cookies
    $("button#clearCookiesButton").on("click", clearAllCookies);
});

function clickImage() {
    // Get the ID of the image that was clicked
    let imageId = this.id;
    // Get the cookie value using the imageId as the cookie name
    let clickCount = readCookie(imageId);
    // If such a cookie exists...
    if (clickCount) {
        // ... convert it to a number
        clickCount = parseInt(clickCount) + 1;
    } else {
        // ... otherwise, initialize to one
        clickCount = 1;
    }
    // Create/update the cookie with the new value
    createCookie(imageId, clickCount);
}

function clearAllCookies() {
    // For every anchor tag, erase the cookie with a name
    // that equals the anchor's ID
    $("a").each(function (index, element) {
        deleteCookie(element.id);
    });
    // Forward to the count page
    window.location = "count.html";
}

function clearOneCookie() {
    // Get the cookie-name data of the button that
    // was clicked
    let cookieType = $(this).data("cookie-name");
    // Delete the cookie with the same name ("apple", "kiwi")
    deleteCookie(cookieType);
    // Forward to the count page
    window.location = "count.html";
}
