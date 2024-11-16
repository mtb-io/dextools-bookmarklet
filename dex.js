// Bookmarklet wrapper using void to prevent any return values from affecting the browser
javascript:void(function() {
  // Prompt user for contract address
  const contractInput = prompt("Enter the contract address:");
  
  // Exit if user cancels or enters empty string
  if (!contractInput || !contractInput.trim()) return;
  
  // Clean up the input by removing whitespace
  const address = contractInput.trim();
  
  // Will store the blockchain network name
  let chain;
  
  // Check if this is an EVM address (starts with 0x and is 42 chars long)
  if (address.startsWith("0x") && 42 === address.length) {
      // For EVM chains, ask user which network to use
      const chainChoice = prompt("Type 1 for Apechain, 2 for Ethereum, or 3 for Polygon:");
      
      // Set chain based on user choice
      chain = 
          "1" === chainChoice ? "apechain" :  // Choice 1 = Apechain
          "2" === chainChoice ? "ether" :     // Choice 2 = Ethereum
          "3" === chainChoice ? "polygon" :   // Choice 3 = Polygon
          void 0;                             // Invalid choice = undefined
      
      // Exit if user made invalid choice
      if (!chain) return;
  } else {
      // For non-EVM addresses, determine chain based on address format
      chain = 
          address.startsWith("EQ") || address.startsWith("UQ") 
              ? "ton"     // TON addresses start with EQ or UQ
              : "solana"; // Default to Solana for other formats
  }
  
  // Open DexTools explorer in new tab with the determined chain and address
  window.open(
      `https://www.dextools.io/app/en/${chain}/pair-explorer/${address}`,
      "_blank"
  );
})();
