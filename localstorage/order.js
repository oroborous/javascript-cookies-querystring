$(document).ready(function() {
    $("form").submit(addMultipleItems);

    /*
    Adds one order object to local storage, to be retrieved
    by the JS in cart.html
     */
    function addSingleItem() {
        var orderInfo = {};

        orderInfo.style = $(":radio[name=style]:checked").val();
        orderInfo.size = $("#size").val();
        orderInfo.qty = parseInt($("#qty").val());

        localStorage.setItem("order", JSON.stringify(orderInfo));
    }

    /*
    Gets the array of order objects out of local storage and adds
    the newest object to it.
     */
    function addMultipleItems() {
        var cartContents = JSON.parse(localStorage.getItem("order"));

        if (!cartContents) {
            cartContents = [];
        }

        var orderInfo = {};

        orderInfo.style = $(":radio[name=style]:checked").val();
        orderInfo.size = $("#size").val();
        orderInfo.qty = parseInt($("#qty").val());

        cartContents.push(orderInfo);

        localStorage.setItem("order", JSON.stringify(cartContents));

    }
});