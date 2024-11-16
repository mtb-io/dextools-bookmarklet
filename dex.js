javascript:void function() {
  // First prompt for contract address
  var a = prompt("Enter the contract address:");
  
  // Check if address exists and isn't empty
  if (a && a.trim()) {
      // Clean up the address by removing whitespace
      var b = a.trim();
      var c; // Will store the chain type
      
      // Check if it's an ETH-style address (0x... and 42 chars long)
      if (b.startsWith("0x") && 42 === b.length) {
          // Second prompt for chain selection
          var a = prompt("Type 1 for Apechain, 2 for Ethereum, or 3 for Polygon:");
          
          // Determine which chain based on user input
          c = "1" == a ? "apechain" : // Option 1
              "2" == a ? "ether" :    // Option 2
              "3" == a ? "polygon" :  // Option 3
              void 0;                 // Invalid input
          
          // Exit if invalid chain selection
          if (!c) return;
      } 
      // Check if it's a TON address (starts with EQ or UQ)
      else if (b.startsWith("EQ") || b.startsWith("UQ")) {
          c = "ton";
      }
      // Default to Solana for all other addresses
      else {
          c = "solana";
      }
      
      // Open dextools with the appropriate chain and contract address
      window.open(
          "https://www.dextools.io/app/en/" + c + "/pair-explorer/" + b,
          "_blank"
      );
  }
}();

// Prevent Chrome from just highlighting the URL
void(0);
