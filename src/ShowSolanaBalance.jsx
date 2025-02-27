import { useConnection, useWallet } from "@solana/wallet-adapter-react"; 
// Import hooks to interact with the Solana wallet and blockchain connection

import { LAMPORTS_PER_SOL } from "@solana/web3.js"; 
// Import constant for converting lamports to SOL (1 SOL = 1,000,000,000 lamports)

import { useEffect } from "react"; 
// Import useEffect hook to run code when the component mounts or updates

export function ShowSolanaBalance() {
    const wallet = useWallet(); 
    // Get wallet-related data and functions (like publicKey)

    const { connection } = useConnection(); 
    // Get the Solana blockchain connection

    async function getMeUserBalance() {
        const balance = await connection.getBalance(wallet.publicKey); 
        // Fetch the balance of the connected wallet in lamports

        document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL; 
        // Convert lamports to SOL and update the UI with the balance
    }

    useEffect(function () {
        getMeUserBalance(); 
        // Call the function to fetch and display balance when the component mounts or updates
    }, [wallet]); 
    // Re-run the effect when the wallet changes (e.g., user connects/disconnects)

    return (
        <div>
            Balance: <span id="balance"></span> SOL 
            {/* Display the user's SOL balance here */}
        </div>
    );
}
