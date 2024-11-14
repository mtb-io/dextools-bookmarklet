# DEXTools Multi-Chain Pair Explorer Bookmarklet

This bookmarklet allows you to quickly look up any token pair on DEXTools by simply clicking a bookmark and entering the contract address. It automatically detects the blockchain based on the address format.

## Supported Chains
- Ethereum
- Solana

## Installation

1. Right-click your browser's bookmarks bar and select "Add page" or "Add bookmark"
   - If you don't see the bookmarks bar, press `Ctrl + Shift + B` (Windows/Linux) or `⌘ + Shift + B` (Mac) to show it

2. In the "Name" field, enter a name for your bookmarklet (e.g., "DEXTools Explorer")

3. In the "URL" field, copy and paste the following code:
```javascript
javascript:void(function(){const a=prompt("Enter the contract address:");if(!a||!a.trim())return;const b=a.trim();let c;b.startsWith("0x")&&42===b.length?c="ether":c="solana";window.open(`https://www.dextools.io/app/en/${c}/pair-explorer/${b}`,"_blank")})();
```

4. Click "Save"

## Usage

1. Click the bookmarklet in your bookmarks bar
2. Enter the contract address when prompted
3. The DEXTools pair explorer page will open in a new tab automatically detecting the correct blockchain

## Chain Detection Logic
- Addresses starting with 0x: Ethereum
- All other addresses: Solana

## Note

Make sure you have your bookmarks bar visible in your browser to use this bookmarklet. 

Built by [mtb](https://x.com/LiverpoolMTB) on X.
