$(document).ready(function () {
   displayManyItems();

   /*
   Retrieves a single order object from local storage and creates
   a table row to display it.
    */
    function displaySingleItem() {
        var orderInfo = JSON.parse(localStorage.getItem("order"));

        // Create table cells with text inside
        var itemCell = $("<td>").text(`${orderInfo.style}-sleeve shirt`);
        var sizeCell = $("<td>").text(orderInfo.size);
        var qtyCell = $("<td>").text(orderInfo.qty);

        // Add all the cells to a table row
        var tableRow = $("<tr>").append(itemCell, sizeCell, qtyCell);

        // Add the table row to the tbody
        $("tbody").append(tableRow);
    }

    /*
    Retrieves an array of order objects from local storage and loops
    to create one table row for each object.
     */
    function displayManyItems() {
        var orderArray = JSON.parse(localStorage.getItem("cart"));

        for (var orderInfo of orderArray) {
            // Create table cells with text inside
            var itemCell = $("<td>").text(`${orderInfo.style}-sleeve shirt`);
            var sizeCell = $("<td>").text(orderInfo.size);
            var qtyCell = $("<td>").text(orderInfo.qty);

            // Add all the cells to a table row
            var tableRow = $("<tr>").append(itemCell, sizeCell, qtyCell);

            // Add the table row to the tbody
            $("tbody").append(tableRow);
        }
    }
});