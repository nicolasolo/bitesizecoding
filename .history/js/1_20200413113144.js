var products = document.querySelector("#products");


$(document).ready(function (data) {
    $.getJSON("json/1.json",
        function (data, textStatus, jqXHR) {
          data = JSON.parse(this.responseText);  
        }
    );
});