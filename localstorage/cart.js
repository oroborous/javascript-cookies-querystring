$(document).ready(function () {
   displayManyItems();

   /*
   Retrieves a single order object from local storage and creates
   a table row to display it.
    */
    function displaySingleItem() {
        var orderInfo = JSON.parse(localStorage.getItem("order"));

        var sleeveStyle = orderInfo.style;
        var size = orderInfo.size;
        var qty = orderInfo.qty;

        var itemCell = $("<td>").text(`${sleeveStyle}-sleeve shirt`);
        var sizeCell = $("<td>").text(size);
        var qtyCell = $("<td>").text(qty);

        var tableRow = $("<tr>").append(itemCell, sizeCell, qtyCell);

        $("tbody").append(tableRow);
    }

    /*
    Retrieves an array of order objects from local storage and loops
    to create one table row for each object.
     */
    function displayManyItems() {
        var orderArray = JSON.parse(localStorage.getItem("order"));

        for (var orderInfo of orderArray) {
            var sleeveStyle = orderInfo.style;
            var size = orderInfo.size;
            var qty = orderInfo.qty;

            var itemCell = $("<td>").text(`${sleeveStyle}-sleeve shirt`);
            var sizeCell = $("<td>").text(size);
            var qtyCell = $("<td>").text(qty);

            var tableRow = $("<tr>").append(itemCell, sizeCell, qtyCell);

            $("tbody").append(tableRow);
        }
    }
});