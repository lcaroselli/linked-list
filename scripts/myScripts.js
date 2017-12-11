// Global Variables
var userDisplaySection = document.getElementById("user-display");
var inputWebsiteTitle = document.getElementById("input-website-title");
var inputWebsiteUrl = document.getElementById("input-website-url");
var inputSubmitBookmark = document.getElementById("input-submit-bookmark");
var totalBookmarksAdded = document.getElementById("total-added");
var totalBookmarksRead = document.getElementById("total-read");
var totalBookmarksUnread = document.getElementById("total-unread");

var bookmarkArray = [];
inputSubmitBookmark.disabled = true;

// Global Events
inputSubmitBookmark.addEventListener("click", createBookmark);
inputWebsiteTitle.addEventListener("input", inputFieldsChanged);
inputWebsiteUrl.addEventListener("input", inputFieldsChanged);


//Functions
//Constructor Function (Blueprint)
function BookmarkCard(webTitle, webUrl, isRead) {
  this.webTitle = webTitle;
  this.webUrl = webUrl;
  this.isRead = isRead;
  this.cardId = Math.floor(Math.random() * 999999);
}


function displayCounts() {
  var totalRead = 0;
  var totalUnread = 0;
  for (var i = 0; i < bookmarkArray.length; i++) {
    if (bookmarkArray[i].isRead === true) {
      totalRead++;
    } else if (bookmarkArray[i].isRead === false) {
      totalUnread++;
    }
  }

  totalBookmarksAdded.innerText = "Total Bookmarks Added: " + bookmarkArray.length;
  totalBookmarksRead.innerText = "Total Read Bookmarks: " + totalRead;
  totalBookmarksUnread.innerText = "Total Unread Bookmarks: " + totalUnread;
}


function inputFieldsChanged() {
  if (inputWebsiteUrl.value == "" && inputWebsiteTitle.value == "") {
    inputSubmitBookmark.disabled = true;
  } else {
    inputSubmitBookmark.disabled = false;
  }
}


function createBookmark() {
  if (inputWebsiteUrl.value == "" || inputWebsiteTitle.value == "") {
    alert("Please enter both a URL and a Title.");
  } else {
    var sampleCard = new BookmarkCard(inputWebsiteTitle.value, inputWebsiteUrl.value, false);

    outputBookmarks(sampleCard); //pushes onto DOM (adds HTML)
    bookmarkArray.push(sampleCard); //pushes into array
    displayCounts();
  }
}


function outputBookmarks(newBookmark) {
  var title = newBookmark.webTitle;
  var url = newBookmark.webUrl;
  var cardId = newBookmark.cardId;
  var isRead = newBookmark.isRead;

  var newArticle = document.createElement("article");
  if (isRead) {
    newArticle.className = "bookmark-card read";
  } else {
    newArticle.className = "bookmark-card";
  }
  newArticle.id = cardId;

  newArticle.innerHTML =
    `<h3 class="bookmark-title">` + title + `</h3>

      <hr class="bookmark-underline">

      <a class="bookmark-link" href="` + url + `" target="_blank">` + url + `</a>

      <hr class="bookmark-underline">

      <input type="button" aria-label="mark bookmark card read" name="bookmark-read" class="bookmark-button-read" value="Read">

      <input type="button" aria-label="delete bookmark card" name="bookmark-delete" class="bookmark-button-delete" value="Delete">`

  var bookmarkButtonRead = newArticle.querySelector(".bookmark-button-read");
  bookmarkButtonRead.addEventListener('click', function () {
    toggleRead(bookmarkButtonRead);
  });

  var bookmarkButtonDelete = newArticle.querySelector(".bookmark-button-delete");
  bookmarkButtonDelete.addEventListener('click', function () {
    deleteBookmark(bookmarkButtonDelete);
  });

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


function toggleRead(param1) {
  var articleId = param1.closest("article").id;
  var indexToToggle = findBookmarkIndex(articleId);
  if (indexToToggle > -1) {
    bookmarkArray[indexToToggle].isRead = !(bookmarkArray[indexToToggle].isRead);
    rebuildBookmarks();
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


function rebuildBookmarks() {
  removeBookmarks();
  for (var i = 0; i < bookmarkArray.length; i++) {
    outputBookmarks(bookmarkArray[i]);
  }
  displayCounts();
}
