javascript:void(function(){const a=prompt("Enter the contract address:");if(!a||!a.trim())return;const b=a.trim();let c;b.startsWith("0x")&&42===b.length?c="ether":c="solana";window.open(`https://www.dextools.io/app/en/${c}/pair-explorer/${b}`,"_blank")})();
