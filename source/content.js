function onRequest()
{
	
	sendResponse({url: url}); 
}

chrome.extension.onRequest.addListener(onRequest); 