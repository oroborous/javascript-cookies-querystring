$(document).ready(function () {
    displayManyItems();
});

function createRowForItem(orderItem) {
    // Create table cells with text inside
    let itemCell = $(`<td>${orderItem.style}-sleeve shirt</td>`);
    let sizeCell = $(`<td>${orderItem.size}</td>`);
    let qtyCell = $(`<td>${orderItem.qty}</td>`);

    // Add all the cells to a table row
    let tableRow = $("<tr>").append(itemCell, sizeCell, qtyCell);
    return tableRow;
}

/*
Retrieves a single order object from local storage and creates
a table row to display it.
 */
function displaySingleItem() {
    let orderItem = JSON.parse(localStorage.getItem("order"));

    // Create row with three cells
    let row = createRowForItem(orderItem);

    // Add the table row to the tbody
    $("tbody").append(row);
}

/*
Retrieves an array of order objects from local storage and loops
to create one table row for each object.
 */
function displayManyItems() {
    // Get the JSON string from local storage
    let orderArray = localStorage.getItem("cart");

    // Does it exist or is it null?
    if (orderArray) {
        // It exists, so parse it back into an array
        orderArray = JSON.parse(orderArray);

        // Loop over the array
        for (let orderItem of orderArray) {
            // Create row with three cells
            let row = createRowForItem(orderItem);

            // Add the table row to the tbody
            $("tbody").append(row);
        }
    }
}