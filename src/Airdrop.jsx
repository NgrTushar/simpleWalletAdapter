import { useConnection, useWallet } from "@solana/wallet-adapter-react" 
// Import hooks to interact with Solana wallet and connection

import { LAMPORTS_PER_SOL } from "@solana/web3.js"; 
// Import constant to convert SOL to lamports (1 SOL = 1,000,000,000 lamports)

// components in react are very similar to html tag
export function Airdrop() {
    const wallet = useWallet(); 
    // Get wallet-related functions and data

    const { connection } = useConnection(); 
    // Get the Solana blockchain connection

    async function sendAirdropToUser() {
        const amount = document.getElementById("amt").value; 
        // Get the amount from the input field

        const pubKey = wallet.publicKey; 
        // Get the public key of the connected wallet

        await connection.requestAirdrop(pubKey, amount * LAMPORTS_PER_SOL); 
        // Request an airdrop of the entered amount (converted to lamports)

        alert("dropped sol"); 
        // Show an alert when the airdrop is successful
    }

    return (
        <div>
            <input id="amt" type="text" placeholder="amount" /> 
            {/* Input field to enter SOL amount */}

            <button onClick={sendAirdropToUser}>Sol Airdrop</button> 
            {/* Button to trigger the airdrop function */}

            Airdrop component 
            {/* Just a simple text to display "Airdrop component" */}
        </div>
    );
}
