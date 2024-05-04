chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openInsightsPage') {
      const insightsUrl = chrome.runtime.getURL('insights.html');
      chrome.tabs.create({ url: insightsUrl });
    }
  });
  