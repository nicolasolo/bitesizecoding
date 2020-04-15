var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function () {
  
  $.get("json/1.json", data,
    function (data, textStatus, jqXHR) {
      console.log()
    },
    "dataType"
  );



});