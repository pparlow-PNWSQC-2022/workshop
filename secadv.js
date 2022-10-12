<!DOCTYPE html>
...
<script src="dist/xss-filters.min.js"></script>
<script>
let untrusted_ajax_res = document.write(location.replace("https://www.w3schools.com"));
document.getElementById("temp").innerHTML=xssFilters.inHTMLData(untrusted_ajax_res);
</script>
