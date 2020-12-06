$(document).ready(function() {
    $("form").submit(addToCart);

    function addToCart() {
        var orderInfo = {};

        orderInfo.style = $(":radio[name=style]:checked").val();
        orderInfo.size = $("#size").val();
        orderInfo.qty = parseInt($("#qty").val());

        localStorage.setItem("order", JSON.stringify(orderInfo));
    }
});