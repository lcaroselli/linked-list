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
var bookmarkArray = [];


// Global Events
inputSubmitBookmark.addEventListener("click", createBookmark);



//Functions
//Constructor Function (Blueprint)
function BookmarkCard (webTitle, webUrl, isRead) {
  this.webTitle = webTitle;
  this.webUrl = webUrl;
  this.isRead = isRead;
  this.cardId = bookmarkArray.length +1;
}


function createBookmark() {
  var sampleCard = new BookmarkCard(inputWebsiteTitle.value, inputWebsiteUrl.value, false);
  outputBookmarks(sampleCard); //pushes onto DOM (adds HTML)
  bookmarkArray.push(sampleCard); //pushes into array
}


//When here, outputBookmarks parameter is now the sampleCard
function outputBookmarks(newBookmark) {
  var title = newBookmark.webTitle;
  var url = newBookmark.webUrl;
  var cardId = newBookmark.cardId;
  var isRead = newBookmark.isRead;

  var newArticle = document.createElement("article");
  newArticle.className = "bookmark-card";
  newArticle.id = cardId;

  newArticle.innerHTML =
    `<h3 class="bookmark-title">` + title + `</h3>

      <hr class="bookmark-underline">

      <a class="bookmark-link" href="` + url + `" target="_blank">` + url + `</a>

      <hr class="bookmark-underline">

      <input type="button" aria-label="mark bookmark card read" name="bookmark-read" class="bookmark-button-read" value="Read">

      <input type="button" aria-label="delete bookmark card" name="bookmark-delete" class="bookmark-button-delete" value="Delete">`

  var bookmarkButtonDelete = newArticle.querySelector(".bookmark-button-delete");
    bookmarkButtonDelete.addEventListener('click', function() {
      deleteBookmark(bookmarkButtonDelete);
    })

  userDisplaySection.appendChild(newArticle);
}



function deleteBookmark(param1) {
  var articleId = param1.closest("article").id;
  var indexToDelete = findBookmarkIndex(articleId);
  if (indexToDelete > -1) {
    bookmarkArray.splice(indexToDelete, 1);
    rebuildBookmarks();
  }
}


//wire up event listener & css based on isRead
function toggleRead(param1) {
  var articleId = param1.closest("article").id;
  var indexToToggle = findBookmarkIndex(articleId);
  if (indexToToggle > -1) {
    bookmarkArray[indexToToggle].isRead = !(bookmarkArray[indexToToggle].isRead);
  }
}


function findBookmarkIndex(key) {
  for (var i = 0; i < bookmarkArray.length; i++) {
    if (bookmarkArray[i].cardId == key) {
      return i;
    }
  }
  return -1;
}


function removeBookmarks() {
  while (userDisplaySection.hasChildNodes()) {
    userDisplaySection.removeChild(userDisplaySection.firstChild);
  }
}


function rebuildBookmarks () {
  removeBookmarks();
  for (var i = 0; i < bookmarkArray.length; i++) {
    outputBookmarks(bookmarkArray[i]);
  }
}
