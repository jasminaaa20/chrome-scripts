// ==UserScript==
// @name         Auto-Mute Websites (Allows Unmuting)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically mutes predefined websites but allows manual unmuting
// @author       You
// @match        *://*.youtube.com/*
// @match        *://*.facebook.com/*
// @match        *://*.twitter.com/*
// @match        *://*.tiktok.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Store user-unmuted videos to prevent remuting
    let unmutedVideos = new WeakSet();

    function muteMedia() {
        document.querySelectorAll('video, audio').forEach(media => {
            if (!unmutedVideos.has(media)) {
                media.muted = true;
            }

            // Listen for manual unmute
            media.addEventListener('volumechange', function () {
                if (!media.muted) {
                    unmutedVideos.add(media); // Mark as user-unmuted
                }
            });
        });
    }

    function observeDOMChanges() {
        const observer = new MutationObserver(muteMedia);
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Initial mute
    muteMedia();

    // Observe changes
    observeDOMChanges();
})();
