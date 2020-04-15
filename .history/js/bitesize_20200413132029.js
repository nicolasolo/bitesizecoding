var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function (data) {
  
  $.getJSON("json/1.json",
    function (data, textStatus, jqXHR) {
      console.log(jqXHR);
      console.log(textStatus);
      data = [];
      $.each(items, function (i,item, key) {
        console.log(items);
        console.log(item);
        console.log(i);
        console.log(data.key); 
         
      });
    }
  );



});