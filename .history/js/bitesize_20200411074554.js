var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");
var i;

  var xmlhttp = new XMLHttpRequest();
  var url = "https://jsonplaceholder.typicode.com/posts";
    function showData(arr) 
      {
        var out = "";
        for( i = 0; i < arr.length; i++) 
          {
            out += 
            ' ( <span> ' + arr[i].id + 
            ' </span> )<h5 class="title">' + arr[i].title + '</h5>' +
            '<p>' + arr[i].body + '</p>'+
            
'<div class="card">'+

  
  '<div class="view overlay">'+
    '<img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap">'+
    '<a href="#!">'+
      '<div class="mask rgba-white-slight"></div>'+
    '</a>'+
  '</div>'+
'<div class="card-body">'+
    '<h4 class="card-title">'+ arr[i].title +'</h4>'+
   '<p class="card-text">'</p>'+
    '<a href="#" class="btn btn-primary">Button</a>'+
  '</div>'+
'</div>'+
'</div>'
            ;
          }
        products.innerHTML = out;
      }



  
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var itemsPerPage = 6; // count of recors per page
      var currentPage = window.location.search.substring(6);
      console.log(currentPage);
      var items = JSON.parse(this.responseText);
      var allPages = Math.ceil(items.length/itemsPerPage);
      console.log(allPages);
      var itemsOnPage = [];//arrays for pages
      console.log(itemsOnPage);
      for (i = 0; i < Math.ceil(items.length/itemsPerPage); i++){
        itemsOnPage[i] = items.slice((i*itemsPerPage), (i*itemsPerPage) + itemsPerPage);
        $('<a>', { href: '?page='+(i+1)+'', text: ''+(i+1)+''}).appendTo(pagination);
      }
      showData(itemsOnPage[currentPage-1]);
    }
  };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 
