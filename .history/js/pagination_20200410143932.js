
var products = document.querySelector("#products");
var pagination = document.querySelector("#pagination");
var currentPage;
var tota
var i;
$(function() {
    function showData(arr) 
      {
        
        var out = "";
        for( i = 0; i < arr.length; i++) 
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
  var url = "https://jsonplaceholder.typicode.com/posts";
  var itemsPerPage = 8; // count of recors per page
  var numPage = window.location.search.substring(6);
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var items = JSON.parse(this.responseText);
      var subArrays = [];//arrays for pages
    // ensure current page isn't out of range
    if (currentPage < 1) { 
        currentPage = 1; 
    } else if (currentPage > totalPages) { 
        currentPage = totalPages; 
    }
  
    var startPage= number, endPage= number;
    if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
      $('<a>', { href: '?page='+(i+1)+'', text: ''+startPage+''}).appendTo(pagination);
    } else {
      // total pages more than max so calculate start and end pages
      var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        // current page somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }
  
    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
  
    // create an array of pages to ng-repeat in the pager control
    var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
      showData(subArrays[numPage-1]);
    }
  };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 
  });