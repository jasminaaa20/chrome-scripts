# **Auto-Mute Websites Userscript**

## **Description**
This userscript automatically mutes all videos and audio on specific websites when they load. It works with **Violentmonkey** (or **Tampermonkey**) and ensures that media elements start muted, while still allowing you to unmute them manually via the browser UI.

## **Features**
✅ Mutes media (`<video>` and `<audio>`) on predefined websites  
✅ Works on dynamically loaded content (e.g., YouTube, TikTok)  
✅ Allows manual unmuting via the browser UI  
✅ Lightweight and runs efficiently  

## **Installation**
1. Install [Violentmonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/) in your browser.
2. Create a new script in the extension's dashboard.
3. Copy and paste the script into the editor.
4. Save and enable the script.

## **Supported Websites**
The script currently auto-mutes the following websites:
- YouTube

To add more websites, edit the `@match` rules in the script.

## **How It Works**
- When you visit a matched website, all `<video>` and `<audio>` elements will be muted by default.
- The script continuously monitors the page for new media and mutes them automatically.
- You can still **unmute manually** using the browser’s built-in controls.

## **Customization**
To mute additional websites, simply edit the script and add more `@match` rules:

```javascript
// @match        *://*.example.com/*
```

## **Limitations**
- This script **only mutes media elements**, not the entire tab.
- It **does not use `chrome.tabs.update`**, as userscripts don’t have access to Chrome’s extension APIs.
