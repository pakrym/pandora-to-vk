function checkForValidUrl(tabId, changeInfo, tab) 
{
  if (tab.url.indexOf('pandora.com') > -1) 
  {
  	chrome.pageAction.show(tabId);
  }
};

function search(tab)
{
    chrome.tabs.executeScript(tab.id, {file :"jquery-2.0.3.min.js" }, 
    	    function(results){
                 chrome.tabs.executeScript(tab.id, {file :"geturl.js" }, 
		    	    function(results){
        	        	chrome.tabs.create({
        					url: results[0]
					    });
            		});
            });
	
};

chrome.tabs.onUpdated.addListener(checkForValidUrl); 
chrome.pageAction.onClicked.addListener(search);
