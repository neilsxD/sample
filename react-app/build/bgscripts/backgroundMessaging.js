/*global chrome*/

chrome.bookmarks.onMoved.addListener(() => {
  alert("bookmark moved as of bg script");
});

chrome.browserAction.onClicked.addListener(function (tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    console.log(activeTab);
    alert("Clicked");
    chrome.tabs.sendMessage(activeTab.id, {
      message: 'clicked_browser_action',
    });
  });
});