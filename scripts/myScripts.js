/*

TODO:

need functions for:

- array manipulation: add card to array, remove card from array, mark as read
- dom manipulation:   loop through array and add each card to dom
                      destroy all cards
- bookmark builder: a function that builds our html elements and applies the styling

Questions:
- is it a good habit to include a label control for inputs even if there is no text
    the label control should only be used when an actual label exists for your input


*/

// Global Variables

var userDisplaySection = document.getElementById("user-display");
var inputSubmitBookmark = document.getElementById("input-submit-bookmark");
var bookmarkButtonDelete = document.getElementById("bookmark-button-delete");
var inputWebsiteTitle = document.getElementById("input-website-title");
var inputWebsiteUrl = document.getElementById("input-website-url");

// Event Listeners

inputSubmitBookmark.addEventListener("click", createBookmark);
//bookmarkButtonDelete.addEventListener("click", "REMOVE INDIVIDUAL BOOKMARK");


// Functions

function removeBookmarks() {
  while (userDisplaySection.hasChildNodes()) {
    userDisplaySection.removeChild(userDisplaySection.firstChild);
}

function outputBookmarks() {

}

}

function createBookmark() {

  var newArticle = document.createElement("article");
  var newContent = document.createTextNode("Hi there and greetings!");

  newArticle.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  userDisplaySection.appendChild(newArticle);
  //document.body.insertBefore(newDiv, currentDiv);

}
