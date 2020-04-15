var products = document.querySelector("#products");


$.getJSON("./json/1.json", data,
    function (data, textStatus, jqXHR) {
        var items = [];
        $(data).each(function (index, element) {
            // element == this
            
        });
    }
);