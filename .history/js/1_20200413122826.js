var products = document.querySelector("#products");

/*
$.getJSON( "json/1.json" , function( data ) {
    var items = [];
    console.log(item);

    $.each( item, function( key, val ) {
        console.log(key);
        console.log(val);
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $('#products').append(item.join(''));
  });
  */
$(function () {
    
$.ajax({
    type: "GET",
    url: "json/1.json",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        jqres
    }
});


});