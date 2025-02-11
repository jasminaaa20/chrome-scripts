# Auto Mute Specified Websites

## Description
This userscript is designed to mute specified websites **only on startup**, allowing you to manually unmute them if needed. It works with userscript managers like **ViolentMonkey**, **TamperMonkey**, and **Greasemonkey**.

## Features
- Mutes specified websites **only when the tab loads**.
- Allows manual unmuting without reapplying mute.
- Works on most modern browsers.
- Simple setup and customization.

## Installation
1. Install a userscript manager:
   - [ViolentMonkey](https://violentmonkey.github.io/)
   - [TamperMonkey](https://www.tampermonkey.net/)
   - [Greasemonkey](https://www.greasespot.net/)
2. Create a **new script** in your userscript manager.
3. Copy and paste the content in the `script.js` file
4. Save and enable the script.
5. Modify the `mutedSites` list to add or remove websites.

## How to Unmute a Tab
- **Chrome/Edge**: Right-click the tab → Select **"Unmute site"** or **"Unmute tab"**.
- **Firefox**: Click the **🔊 speaker icon** on the tab.
- **Opera**: Right-click the tab → Select **"Unmute tab"**.
- **Safari**: Click the **🔊 speaker icon** in the address bar or tab.

## Customization
- Edit the `mutedSites` array in the script to include or remove websites.
- The script only mutes the tab **once on load**, so it won’t interfere with manual unmuting.

## License
This script is provided as-is under the MIT License. Feel free to modify and share it.

Enjoy a quieter browsing experience! 🚀
