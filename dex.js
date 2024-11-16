javascript:void(function() {
    // Prompt user for contract address
    const contractAddress = prompt("Enter the contract address:");
    
    // Return if no input or empty string
    if (!contractAddress || !contractAddress.trim()) {
        return;
    }
    
    const trimmedAddress = contractAddress.trim();
    let chain;
    
    // Determine which blockchain based on address format
    if (trimmedAddress.startsWith("0x") && trimmedAddress.length === 42) {
        // Handle Ethereum-style addresses
        const chainChoice = prompt("Type 1 for Apechain, 2 for Ethereum, or 3 for Polygon:");
        
        chain = chainChoice === "1" ? "apechain" 
             : chainChoice === "2" ? "ether"
             : chainChoice === "3" ? "polygon"
             : undefined;
        
        if (!chain) {
            return;
        }
    } else if (trimmedAddress.startsWith("EQ") || trimmedAddress.startsWith("UQ")) {
        // Handle TON addresses
        chain = "ton";
    } else {
        // Default to Solana
        chain = "solana";
    }
    
    // Open DexTools explorer in new tab
    window.open(
        `https://www.dextools.io/app/en/${chain}/pair-explorer/${trimmedAddress}`,
        "_blank"
    );
})();
