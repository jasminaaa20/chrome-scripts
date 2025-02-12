## **Auto-Mute Websites (Violentmonkey/Tampermonkey Script)**
This userscript **automatically mutes videos and audio** on specific websites but allows you to unmute them manually.  

### **🚀 Features**
- ✅ **Mutes media by default** on predefined websites.
- ✅ **Allows manual unmuting**—won’t force mute again if you unmute.
- ✅ **Works with dynamically loaded media** (e.g., infinite scroll, autoplay).
- ✅ **Lightweight & efficient**, using a MutationObserver.

### **📌 Supported Websites**
By default, this script mutes videos/audio on:
- **YouTube**
- **Facebook**
- **Twitter**
- **TikTok**

You can add more websites by modifying the `@match` rules.

### **📦 Installation**
1. Install **[Violentmonkey](https://violentmonkey.github.io/)** or **Tampermonkey** in your browser.
2. Create a **new userscript**.
3. Copy & paste the script into the editor.
4. Save and enable the script.

### **⚙️ Customization**
To **add more websites**, edit the script and add new `@match` rules:
```javascript
// @match        *://*.spotify.com/*
// @match        *://*.example.com/*
```

### **📢 How It Works**
1. Videos and audio **start muted** on supported websites.
2. **Manually unmute** using the browser UI.
3. The script **remembers your choice** and won’t re-mute manually unmuted videos.

### **🤖 Technical Details**
- Uses `MutationObserver` to detect and mute new media elements.
- Listens for `volumechange` events to **detect manual unmuting**.
- Uses a `WeakSet` to **track unmuted videos** and prevent re-muting.

### **💡 Notes**
- This script **only mutes videos & audio**, it does **not** mute entire tabs.
- **You can still use the browser's built-in tab mute function** if needed.

### **🛠️ Future Improvements**
- Add a toggle option to disable/enable muting per website.
- Support for additional media elements.
