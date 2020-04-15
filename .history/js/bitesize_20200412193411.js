var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination")
$(function() {
    function showData(arr) 
      {
        
        let out = "";
        for(let i = 0; i < arr.length; i++) 
          {
            out += 
            ' ( <span> ' + arr[i].id + ' </span> )  ' +
            '<h4 class="title">' + arr[i].title + '</h4>' +
            '<h4 class="title">' + arr[i].title + '</h4>' +
            '<p>' + arr[i].body + '</p>';
          }
        products.innerHTML = out;
      }
  var xmlhttp = new XMLHttpRequest();
  var url = "./json/";
  var itemsPerPage = 8; // count of recors per page
  var numPage = window.location.search.substring(6);
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var items = JSON.parse(this.responseText);
      var subArrays = [];//arrays for pages
      for (let i = 0; i < Math.ceil(items.length/itemsPerPage); i++){
        subArrays[i] = items.slice((i*itemsPerPage), (i*itemsPerPage) + itemsPerPage);
        $('<a>', { href: '?page='+(i+1)+'', text: ''+(i+1)+''}).appendTo(pagination);
      }
      showData(subArrays[numPage-1]);
    };
  };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 
  });