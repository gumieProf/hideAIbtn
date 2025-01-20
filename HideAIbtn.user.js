// ==UserScript==
// @name         Hide AI btn
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Removes AI buttons added to X.
// @author       gumieProf
// @match        https://x.com/*
// @run-at      document-start
// @grant        none
// ==/UserScript==

(function() {
var observer = new MutationObserver(function(mutations) {
    try{
        var menu = document.querySelector('a[href="/i/grok"]');
        menu.style.display="none";
        var btn = document.querySelector('div[data-testid="GrokDrawer"]');
        btn.style.display="none"
        var pfBTN=document.querySelector('a[href="/settings/profile"]').parentNode.children.item(1);
        pfBTN.style.display="none"
    }
    catch (e) {
    }
    });
    observer.observe(document, { childList: true, subtree: true });
})();
