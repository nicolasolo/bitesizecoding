$(function () {

    $.getJSON("json/1.json", function (data, key) {
      var posts = [];
for (let i = 0; i < 100; i++) {
    posts.push(`Post ${i}`);
}

// Configurable variables
const POSTS_PER_PAGE = 5;
const CURRENT_PAGE = 13;
const PAGINATION_SIZE = 10;

/**
 * How we want the pagination to look like
 */
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
const noOfPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
const allPages = [...Array(noOfPages + 1).keys()].slice(1, noOfPages + 1);
const firstPossibleVisiblePage = Math.max(1, CURRENT_PAGE - noOfPagesBehind);
const lastPossibleVisiblePage = Math.min(CURRENT_PAGE + noOfPagesAhead, noOfPages);

/**
 * Construct visible pages
 */
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