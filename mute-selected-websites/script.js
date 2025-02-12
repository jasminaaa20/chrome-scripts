// ==UserScript==
// @name         Auto-Mute Websites
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically mutes predefined websites
// @author       You
// @match        *://*.youtube.com/*
// @match        *://*.facebook.com/*
// @match        *://*.twitter.com/*
// @match        *://*.tiktok.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function muteMedia() {
        document.querySelectorAll('video, audio').forEach(media => {
            media.muted = true;
        });
    }

    function observeDOMChanges() {
        const observer = new MutationObserver(muteMedia);
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Mute existing media
    muteMedia();

    // Observe and mute dynamically loaded media
    observeDOMChanges();
})();
