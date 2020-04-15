var products = document.querySelector("#products");

var url = "json/1.json";
var data =
$.ajax({
    dataType: "json",
    url: url,
    data: item,
    success: success
  });
$.getJSON( url , function( data ) {
    var items = [];
    console.log(item);

    $.each( item, function( key, val ) {
        console.log(key);
        console.log(val);
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $('#products').append(item.join(''));
  });