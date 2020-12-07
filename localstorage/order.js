$(document).ready(function() {
    $("form").submit(addMultipleItems);

    /*
    Adds one order object to local storage, to be retrieved
    by the JS in cart.html
     */
    function addSingleItem() {
        // Create an object and fill it with form data
        var orderInfo = {};

        orderInfo.style = $(":radio[name=style]:checked").val();
        orderInfo.size = $("#size").val();
        orderInfo.qty = parseInt($("#qty").val());

        // Turn the object into a JSON string and store
        localStorage.setItem("order", JSON.stringify(orderInfo));
    }

    /*
    Gets the array of order objects out of local storage and adds
    the newest object to it.
     */
    function addMultipleItems() {
        // Might be a string if cart exists or
        // might be null if first time using cart.
        var cartContents = localStorage.getItem("cart");

        if (!cartContents)
            // If it's null, create a new empty array
            cartContents = [];
        else
            // Otherwise, parse the existing string back into an array
            cartContents = JSON.parse(cartContents);

        // Create an object and fill it with form data
        var orderInfo = {};

        orderInfo.style = $(":radio[name=style]:checked").val();
        orderInfo.size = $("#size").val();
        orderInfo.qty = parseInt($("#qty").val());

        cartContents.push(orderInfo);

        // Turn the object into a JSON string and store
        localStorage.setItem("cart", JSON.stringify(cartContents));
    }
});