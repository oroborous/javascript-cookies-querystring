$(document).ready(function() {
   var params = new URLSearchParams(window.location.search);

   var sleeveStyle = params.get("style");
   var size = params.get("size");
   var qty = params.get("qty");

   $("td#item").text(`${sleeveStyle}-sleeve shirt`);
   $("td#size").text(size);
   $("td#qty").text(qty);

});