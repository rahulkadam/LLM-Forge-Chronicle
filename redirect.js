// This is a simple redirect script for GitHub Pages
// It checks if we are being redirected from a 404 page
// and converts the query string back to a path
(function() {
  // Only run this script if we're on the redirect from 404 page
  if (window.location.search.indexOf('?/') !== 0) {
    return;
  }
  
  // Extract the path from the query string and redirect
  var redirectPath = window.location.search.substring(2);
  
  // Use history API to change the URL without reloading
  window.history.replaceState(
    null, 
    null,
    '/' + redirectPath + window.location.hash
  );
})();