$(document).ready(function() {
   var orderInfo = JSON.parse(localStorage.getItem("order"));

   var sleeveStyle = orderInfo.style;
   var size = orderInfo.size;
   var qty = orderInfo.qty;

   $("td#item").text(`${sleeveStyle}-sleeve shirt`);
   $("td#size").text(size);
   $("td#qty").text(qty);

});