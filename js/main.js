// Author: Eugenio Berzal --> http://www.eugenioberzal.com
//Message display on the window.
window.onbeforeunload = function() {
	if(window.location.hash.search(/([peliculas|series])\/([0-9]+)\/play/ig) > -1){
    	return chrome.i18n.getMessage("popMessage");
	}
}
