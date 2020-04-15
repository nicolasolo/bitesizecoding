var products = document.querySelector("#products");


$.getJSON( "json/1.json", function( data ) {
    var items = [];
    console.log(item);

    $.each( , function( key, val ) {
        console.log(key);
        console.log(val);
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $('#products').append(items.join(''));
  });