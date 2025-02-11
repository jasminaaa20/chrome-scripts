// ==UserScript==
// @name         Auto Mute Specified Websites
// @namespace    https://example.com/
// @version      1.0
// @description  Automatically mutes specified websites when opened.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of websites to mute (add more sites as needed)
    const mutedSites = [
        "youtube.com",
        "facebook.com",
        "twitter.com"
    ];

    function shouldMute(url) {
        return mutedSites.some(site => url.includes(site));
    }

    function muteTab() {
        let video = document.querySelector("video");
        let audio = document.querySelector("audio");

        if (video) {
            video.muted = true;
        }

        if (audio) {
            audio.muted = true;
        }

        // Try muting the tab if possible (only works in some browsers)
        if (typeof document.hidden !== "undefined") {
            let iframe = document.createElement("iframe");
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            iframe.contentWindow.postMessage({ type: "mute" }, "*");
        }
    }

    // Check if the current site should be muted
    if (shouldMute(window.location.href)) {
        muteTab();

        // Re-check periodically in case a video/audio starts playing later
        setInterval(muteTab, 2000);
    }
})();
