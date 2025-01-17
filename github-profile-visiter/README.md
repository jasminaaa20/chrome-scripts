# Auto Refresh Script

This script refreshes a webpage every 5 seconds. It is designed to be used with the **Violentmonkey** browser extension.

## Requirements

1. **Violentmonkey** browser extension:
   - Install it from [here](https://violentmonkey.github.io/).
2. A webpage where you want to run the script.

## Installation Instructions

1. **Copy the Script**:
   - Open the `script.js` file in this repository.
   - Copy the entire content of the file.

2. **Set Up Violentmonkey**:
   - Open your browser and click on the Violentmonkey icon in the toolbar.
   - Click on **Dashboard** to open the Violentmonkey script manager.
   - Click the **"+" button** or select **"Create a new script"**.

3. **Paste the Script**:
   - Replace the default template in the script editor with the copied code from `script.js`.
   - Customize the `@match` directive in the script if needed. By default, it runs on all webpages (`*://*/*`).

4. **Save and Activate**:
   - Save the script by clicking **File > Save**.
   - Ensure the script is enabled for the desired webpages.

## Usage

1. Visit the webpage where you want the auto-refresh functionality.
2. The script will automatically refresh the page every 3 seconds.

## Customization

- To adjust the refresh interval, modify the following line in the script:
  ```javascript
  setInterval(() => location.reload(), 3000);
  ```
  Replace `5000` with the desired interval in milliseconds (e.g., `10000` for 10 seconds).

## Troubleshooting

- Ensure Violentmonkey is installed and enabled.
- Verify that the script is active on the target webpage.
- For restricted websites, ensure Violentmonkey permissions allow the script to run.
