chrome.tabs.onUpdated.addListener(() => {
    console.log('Tab has been updated...');
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'reload' });
    });
});