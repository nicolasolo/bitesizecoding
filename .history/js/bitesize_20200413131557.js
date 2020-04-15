var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function (data) {
  
  $.getJSON("json/1.json",
    function (data, textStatus, jqXHR) {
      console.log(jqXHR);
      console.log(textStatus);
      var items = [];
      $.each(items, function (i,item) {
        console.log(i) 
         
      });
    }
  );



});