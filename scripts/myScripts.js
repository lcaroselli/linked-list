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

// Event Listeners

inputSubmitBookmark.addEventListener("click", createBookmark);
//bookmarkButtonDelete.addEventListener("click", "REMOVE INDIVIDUAL BOOKMARK");

//Constructor Function (Our Blueprint)
function BookmarkCard (webTitle, webUrl, isRead) {
  this.webTitle = webTitle;
  this.webUrl = webUrl;
  this.isRead = isRead;
}

function createBookmark() {
  var sampleCard = new BookmarkCard(inputWebsiteTitle.value, inputWebsiteUrl.value, false);
  console.log (sampleCard);
  outputBookmarks(sampleCard);
}


function outputBookmarks(param1) {
  var title = param1.webTitle;
  var url = param1.webUrl;

  var newArticle = document.createElement("article");
  newArticle.className = "bookmark-card";

  var newHeader = document.createElement("h3");
  newHeader.className = "bookmark-title";
  newHeader.innerText = title;
  newArticle.appendChild(newHeader);

  var newHr = document.createElement("hr");
  newHr.className = "bookmark-underline";
  newArticle.appendChild(newHr);

  var newUrl = document.createElement("a");
  newUrl.className = "bookmark-link";
  newUrl.innerText = url;
  newUrl.href = url;
  newUrl.target = "_blank";
  newArticle.appendChild(newUrl);

  newArticle.appendChild(newHr.cloneNode(true));

  var newReadButton = document.createElement("input");
  newReadButton.type = "button";
  newReadButton.name = "bookmark-read";
  //newReadButton.id = "bookmark-button-read";
  //aria-label
  newReadButton.value = "Read";
  newArticle.appendChild(newReadButton);


  var newDeleteButton = document.createElement("input");
  newDeleteButton.type = "button";
  newDeleteButton.name = "bookmark-delete";
  //newReadButton.id = "bookmark-button-read";
  //aria-label
  newDeleteButton.value = "Delete";
  newArticle.appendChild(newDeleteButton);

  //newArticle.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  userDisplaySection.appendChild(newArticle);
  //document.body.insertBefore(newDiv, currentDiv);
}



function removeBookmarks() {
  while (userDisplaySection.hasChildNodes()) {
    userDisplaySection.removeChild(userDisplaySection.firstChild);
  }
}
