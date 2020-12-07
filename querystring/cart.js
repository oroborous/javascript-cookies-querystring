$(document).ready(function() {
   var params = new URLSearchParams(window.location.search);

   var sleeveStyle = params.get("style");
   var size = params.get("size");
   var qty = params.get("qty");
   var customizations = params.getAll("custom");

   $("td#item").text(`${sleeveStyle}-sleeve shirt`);
   $("td#size").text(size);
   $("td#qty").text(qty);
   $("td#custom").text(customizations.join(" - "));
});