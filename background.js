chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({
    url: "./test.html"
  });
});
