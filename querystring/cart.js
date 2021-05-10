$(document).ready(function() {
   let params = new URLSearchParams(window.location.search);

   let sleeveStyle = params.get("style");
   let size = params.get("size");
   let qty = params.get("qty");
   let customizations = params.getAll("custom");

   $("td#item").text(`${sleeveStyle}-sleeve shirt`);
   $("td#size").text(size);
   $("td#qty").text(qty);
   $("td#custom").text(customizations.join(" - "));
});