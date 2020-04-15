var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function (data) {
  
  $.getJSON("json/1.json", data,
    function (data, textStatus, jqXHR) {
      console.log(jqXHR);
      
    }
  );



});