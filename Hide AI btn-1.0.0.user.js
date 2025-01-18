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
    'use strict'
    setTimeout(function(){
        var btn = document.querySelector('div[data-testid="GrokDrawer"]');
        btn.style.visibility="hidden"
    },1000);
})();