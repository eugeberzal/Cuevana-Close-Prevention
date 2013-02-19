// Author: Eugenio Berzal --> http://www.eugenioberzal.com
//Message display on the window.
window.onbeforeunload = function() {
	if(window.location.hash.search(/([peliculas|series])\/([0-9]+)\/play/ig) > -1){
		// _gaq.push(["_trackEvent", "popMessage", "Show"]);
		chrome.extension.sendMessage({message: "popMessage"});
		return chrome.i18n.getMessage("popMessage");
	}
}

// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-9568139-17']);

// (function() {
//   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//   ga.src = 'https://ssl.google-analytics.com/ga.js';
//   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
// })();
