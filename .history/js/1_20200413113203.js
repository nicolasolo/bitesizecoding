var products = document.querySelector("#products");


    $.getJSON("json/1.json",
        function (data, textStatus, jqXHR) {
          data = JSON.parse(this.responseText);  
        }
    );