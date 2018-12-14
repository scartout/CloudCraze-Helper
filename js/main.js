const showViewsFile = 'js/showViews.js',
	showEventsFile = 'js/showEvents.js',
	searchLabelsFile = 'js/searchLabels.js',
	searchCCConfigFile = 'js/searchPageconfig.js',
	pageInfoFile = 'js/pageInfo.js',
	aboutFile = 'js/about.js';

function runAction(jsFile){
	chrome.tabs.executeScript({
		file: jsFile
	})
}

document.getElementById('showViewsButton').addEventListener('click', ()=> runAction(showViewsFile));

document.getElementById('showEventsButton').addEventListener('click', ()=> runAction(showEventsFile));

document.getElementById('searchLabelsButton').addEventListener('click', ()=> runAction(searchLabelsFile));

document.getElementById('searchPageconfigButton').addEventListener('click', ()=> runAction(searchCCConfigFile));

document.getElementById('pageInfoButton').addEventListener('click', ()=> runAction(pageInfoFile));

document.getElementById('aboutButton').addEventListener('click', ()=> runAction(aboutFile));