# Auto Mute Specified Websites

## Description
This script is designed for use with userscript managers like **ViolentMonkey**, **TamperMonkey**, or **Greasemonkey**. It automatically mutes tabs when you open specific websites listed in the script.

## Features
- Automatically mutes specified websites.
- Works on most modern browsers that support userscripts.
- Periodically checks and mutes any late-loaded media elements.

## Installation
1. Install a userscript manager such as:
   - [ViolentMonkey](https://violentmonkey.github.io/)
   - [TamperMonkey](https://www.tampermonkey.net/)
   - [Greasemonkey](https://www.greasespot.net/)
2. Click on `New Script` in your userscript manager.
3. Copy and paste the content in the `script.js` file
4. Save and enable the script.
5. Open a website listed in the script and it will be muted automatically.

## Customization
- Edit the `mutedSites` array in the script to include or remove websites as needed.
- Modify the `setInterval(muteTab, 2000);` if you want to adjust how often the script checks for media elements.

## Notes
- Some browsers may restrict tab-wide muting, but individual media elements will still be muted.
- The script is designed for simple usage and may require permissions depending on your browser.

## License
This script is provided as-is under the MIT License. Feel free to modify and share it.

Enjoy a quieter browsing experience! 🚀
