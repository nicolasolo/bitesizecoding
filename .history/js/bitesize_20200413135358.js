var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function () {
  
  $.getJSON( "json/1.json", function( data ) {
    var items = [];
    $.each( data, function(key) {
      items.push(
      '<div class="card" id="data[key].id">'+
  '<div class="card-body">'+
    '<h5 class="card-title">'+data[key].title+'</h5>'+
    '<p class="card-text">Content</p></div></div>' );
    });
   console.log(data);
    $( "<div/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });



});