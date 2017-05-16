/*
TO DO:
need functions for:
- array manipulation: add card to array, remove card from array, mark as read
- dom manipulation:   loop through array and add each card to dom
                      destroy all cards
- bookmark builder: a function that builds our html elements and applies the styling
*/


// Global Variables
var userDisplaySection = document.getElementById("user-display");
var inputWebsiteTitle = document.getElementById("input-website-title");
var inputWebsiteUrl = document.getElementById("input-website-url");
var inputSubmitBookmark = document.getElementById("input-submit-bookmark");


// Events
inputSubmitBookmark.addEventListener("click", createBookmark);
//bookmarkButtonDelete.addEventListener("click", "REMOVE INDIVIDUAL BOOKMARK");


//Functions
//Constructor Function (Blueprint)
function BookmarkCard (webTitle, webUrl, isRead) {
  this.webTitle = webTitle;
  this.webUrl = webUrl;
  this.isRead = isRead;
}


function createBookmark() {
  var sampleCard = new BookmarkCard(inputWebsiteTitle.value, inputWebsiteUrl.value, false);
  outputBookmarks(sampleCard);
}


function outputBookmarks(newBookmark) {
  var title = newBookmark.webTitle;
  var url = newBookmark.webUrl;

  var newArticle = document.createElement("article");
  newArticle.className = "bookmark-card";

  newArticle.innerHTML =
    `<h3 class="bookmark-title">` + title + `</h3>

      <hr class="bookmark-underline">

      <a class="bookmark-link" href="` + url + `" target="_blank">` + url + `</a>

      <hr class="bookmark-underline">

      <input type="button" aria-label="mark bookmark card read" name="bookmark-read" value="Read">

      <input type="button" aria-label="delete bookmark card" name="bookmark-delete" value="Delete">`

  userDisplaySection.appendChild(newArticle);
}


function removeBookmarks() {
  while (userDisplaySection.hasChildNodes()) {
    userDisplaySection.removeChild(userDisplaySection.firstChild);
  }
}



/*anytime enter is clicked, add a new bookmark
inputSubmitBookmark.addEventListener('click', function () {
  var newArticle = document.createElement("article");
  newArticle.className = "bookmark-card";
  // Adding text content to the new dom node
  newArticle.textContent = "New article!";
  // Spitting said dom node on to page
  newArticle.appendChild(newHeader)
  etc etc
});*/
