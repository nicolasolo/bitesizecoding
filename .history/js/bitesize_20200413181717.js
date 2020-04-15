var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");

$(function () {
  
  $.getJSON( "json/1.json", function( data,key ) {
    var items = [];
    $.each( data, function(i) {
      items.push(
      '<div class="card" id="'+data[i].id+'">'+
  '<div class="card-body">'+
    '<h5 class="card-title">'+data[i].title+'</h5>'+
    '<p class="card-text">'+data[i].title+'</p>'+
    '</div>'+
    '<div class="card-footer">'+
    '<a href="'+href()+'">more</a>'+
    '</div>'+
    '</div>' );
    });
   console.log(data);
    $( "<div/>", {
      "class": "card-columns",
      html: items.join( "" )
    }).appendTo( "body" );
  });
var href


});