var url = "/json/1.json";
/* 
        $.getJSON("json/1.json", function (data, key) {
            var items = [];
           $.each(data, function (i) {
              items.push(
                '<div class="card" id="' + data[i].id + '">' +
                  '<div class="card-body">' +
                   '<h5 class="card-title">' + data[i].title + '</h5>' +
                   '<p class="card-text">' + data[i].title + '</p>' +
                  '</div>' +
                  '<div class="card-footer">' +
                   '<a href="blogs.html#' + data[i].id + '">more</a>' +
                  '</div>' +
                '</div>'
              );
        console.log(data[i].category);
        
              $('a').attr('href', function (i, href) {
                return href + data[i].id;
              });
            });
            console.log();
            $("<div>", {
              "class": "card-columns",
              html: items.join("")
            },"</div>").appendTo("#products");
        */
       var cat
       var i;
          $.getJSON(url,
              function (data) {
                  $.each(data, function (i, v) { 
                       if(v.category == "Grafica"){
                           console.log(v.title,v.id);
                           
                       }
                  });
return cat;
              }
          );
          /*
$(function () {

// Configurable variables
const POSTS_PER_PAGE = 6;
const CURRENT_PAGE = 1;
const PAGINATION_SIZE = 10;

// How we want the pagination to look like
 
let noOfPagesBehind;
let noOfPagesAhead;

// if pagination size is even we want current page to be placed at the beginning of second half
if (PAGINATION_SIZE % 2 === 0) {
    noOfPagesBehind = PAGINATION_SIZE / 2;
    noOfPagesAhead = (PAGINATION_SIZE / 2) - 1;
} else {
    // if pagination size is uneven the current page will be placed in the middle
    noOfPagesBehind = Math.trunc(PAGINATION_SIZE / 2);
    noOfPagesAhead = Math.trunc(PAGINATION_SIZE / 2);
}

// Calculate some meaningful variables to work with
const noOfPages = Math.max(1, Math.ceil(items.length / POSTS_PER_PAGE));
console.log(noOfPages);
const allPages = [...Array(noOfPages + 1).keys()].slice(1, noOfPages + 1);
console.log(allPages);
const firstPossibleVisiblePage = Math.max(1, CURRENT_PAGE - noOfPagesBehind);
console.log(firstPossibleVisiblePage);
const lastPossibleVisiblePage = Math.min(CURRENT_PAGE + noOfPagesAhead, noOfPages);

//Construct visible pages
 
let visiblePages;

// Total pages is smaller than pagination size, just show all pages
if (noOfPages < PAGINATION_SIZE) {
    visiblePages = allPages;
} else if ((lastPossibleVisiblePage - firstPossibleVisiblePage) + 1 < PAGINATION_SIZE) {
    // Pagination hit one of the bounderies and we can expand it either way
    visiblePages = firstPossibleVisiblePage === 1
        // Pagination hit left boundary
        ? allPages.slice(0, PAGINATION_SIZE)
        // Pagination hit right boundary
        : allPages.slice(-PAGINATION_SIZE);
} else {
    // Enough room on both end, just slice the allPages array
    visiblePages = allPages.slice(firstPossibleVisiblePage - 1, lastPossibleVisiblePage);
}

console.log('Current page', CURRENT_PAGE);
console.log('Visible pages', visiblePages);


    });
*/