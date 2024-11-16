# DEXTools QuickSearch 🔍

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/mtb-io/dextools-bookmarklet/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

![DEXTools QuickSearch](assets/head-image.jpg)

A simple, secure bookmarklet that lets you quickly look up any token pair on DEXTools. Just click the bookmark, enter a contract address, and it automatically detects the correct blockchain.

## Table of Contents 📑
- [Quick Start](#quick-start-)
- [Features](#features-)
- [Supported Chains](#supported-chains-%EF%B8%8F)
- [Installation](#installation-)
  - [Chromium-based (Chrome/Brave/Firefox)](#chromium-based-chromebravefirefox)
  - [Safari](#safari)
  - [Installation Steps](#installation-steps)
- [Usage](#usage-)
- [Security](#security-)
- [Support](#support-)
- [Author](#author-)
- [License](#license-%EF%B8%8F)

🏷️ v0.0.1

## Quick Start ⚡
1. Add the bookmarklet to your browser (instructions below)
2. Click it and enter a contract address like: `0x1234...` or `EQxyz...`
3. Get redirected to DEXTools with the correct chain automatically detected

## Features ✨
- 🔍 Quick token pair lookup
- 🔗 Direct access to DEXTools explorer
- 🔒 No external dependencies
- ⛓️ Automatic chain detection
- 💻 Works on Chrome, Firefox, Brave, and Safari
- 🚀 Lightweight (<1KB)

## Supported Chains ⛓️
- Ethereum (0x addresses)
- Apechain (0x addresses)
- Polygon (0x addresses)
- TON (EQ/UQ addresses)
- Solana (All other address formats)

## Installation 📥

First, show your browser's bookmarks bar:
- **Windows/Linux**: Press `Ctrl + Shift + B`
- **Mac**: Press `⌘ + Shift + B`

💡 The unminified source code is available in the `src/` directory for inspection.

Choose the correct snippet for your browser:

### Chromium-based (Chrome/Brave/Firefox) 
<details>
<summary>Click to show code (dist/dex-chromium.min.js)</summary>

```javascript
javascript:void(function(){const t=prompt("Enter the contract address:");if(!t||!t.trim())return;const r=t.trim();let n;if(r.startsWith("0x")&&42===r.length){const t=prompt("Type 1 for Apechain, 2 for Ethereum, or 3 for Polygon:");if(n="1"===t?"apechain":"2"===t?"ether":"3"===t?"polygon":void 0,!n)return}else n=r.startsWith("EQ")||r.startsWith("UQ")?"ton":"solana";window.open(`https://www.dextools.io/app/en/${n}/pair-explorer/${r}`,"_blank")})();
```
</details>

### Safari
<details>
<summary>Click to show code (dist/dex-safari.min.js)</summary>

```javascript
javascript:(function(){const a=prompt("Enter the contract address:");if(!a||!a.trim())return;const b=a.trim();let c;if(b.startsWith("0x")&&42===b.length){const a=prompt("Type 1 for Apechain, 2 for Ethereum, or 3 for Polygon:");if(c="1"===a?"apechain":"2"===a?"ether":"3"===a?"polygon":null,!c)return}else c=b.startsWith("EQ")||b.startsWith("UQ")?"ton":"solana";location.href=`https://www.dextools.io/app/en/${c}/pair-explorer/${b}`})();
```
</details>

### Installation Steps:
1. Right-click your bookmarks bar and select "Add Page" or "Add Bookmark"
2. Name it "DEXTools Search" (or whatever you prefer)
3. Copy the code snippet for your browser and paste it in the URL/Location field
4. Save the bookmark

## Usage 🔧
1. Click the bookmarklet
2. Enter any token contract address
3. For 0x addresses, you'll be prompted to choose between:
   - Type `1` for Apechain
   - Type `2` for Ethereum
   - Type `3` for Polygon
4. TON addresses (starting with either "EQ" or "UQ") are automatically detected
5. Solana addresses (any other format) are automatically detected
6. Get redirected to DEXTools with the correct chain automatically selected

## Security 🔒
- ✅ Code is open source and can be inspected
- ✅ Only connects to official DEXTools website
- ✅ No data collection or storage
- ✅ No external API calls

## Support 💬

Found a bug or need help? [Open an issue](https://github.com/mtb-io/dextools-bookmarklet/issues)

## Author 👨‍💻

Built by [mtb labs](https://mtblabs.io)

## License ⚖️

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog 📝
See [CHANGELOG.md](CHANGELOG.md) for a list of changes and versions.
