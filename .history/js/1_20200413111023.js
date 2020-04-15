var products = document.querySelector("#products");


$.ajax({
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    url: "./json/1.json",
    data: "data",
    success: function (response) {
        
    }
});