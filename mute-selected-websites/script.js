// ==UserScript==
// @name         Auto Mute New Tabs
// @namespace    https://example.com/
// @version      1.1
// @description  Mutes specified websites on tab startup without remuting after manual unmute.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of websites to mute (modify this list as needed)
    const mutedSites = [
        "youtube.com",
        "facebook.com",
        "twitter.com"
    ];

    function shouldMute(url) {
        return mutedSites.some(site => url.includes(site));
    }

    function muteTab() {
        if (document.hidden) return; // Ensures the script runs only when the page is visible

        // Mute the entire tab
        try {
            let stream = new AudioContext().createMediaStreamDestination();
            let audio = new Audio();
            audio.srcObject = stream.stream;
            audio.muted = true;
        } catch (e) {}

        // Mute video and audio elements in the page
        document.querySelectorAll("video, audio").forEach(media => media.muted = true);
    }

    // Run once when the page loads
    if (shouldMute(window.location.href)) {
        muteTab();
    }

})();
