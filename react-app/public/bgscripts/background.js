/*global chrome*/

chrome.runtime.onInstalled.addListener(() => {
  console.log("seems runtime listener is working");
});

chrome.bookmarks.onCreated.addListener(() => {
  alert("bookmark saved");
});
