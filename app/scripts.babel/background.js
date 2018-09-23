'use strict';

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: '.reddit.com' },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab) {
  var newUrl = tab.url.replace(
    '//old.', '//').replace('reddit.com', 'redditp.com');
  chrome.tabs.update({url: newUrl});
});
