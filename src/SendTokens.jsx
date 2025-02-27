import { useConnection, useWallet } from "@solana/wallet-adapter-react"; 
// Import hooks to interact with the Solana wallet and blockchain connection

import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"; 
// Import necessary Solana blockchain functions and constants

export function SendTokens() {
    const wallet = useWallet(); 
    // Get wallet-related data and functions (like publicKey and sendTransaction)

    const { connection } = useConnection(); 
    // Get the Solana blockchain connection

    async function sendTokens() {
        let to = document.getElementById("to").value; 
        // Get recipient's wallet address from input field

        let amount = document.getElementById("amount").value; 
        // Get the amount of SOL to send from input field

        const transaction = new Transaction(); 
        // Create a new transaction object

        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey, 
            // Sender's public key (current wallet's public key)

            toPubkey: new PublicKey(to), 
            // Recipient's public key, converted from string to PublicKey object

            lamports: amount * LAMPORTS_PER_SOL, 
            // Convert SOL to lamports (1 SOL = 1,000,000,000 lamports) and set transfer amount
        }));

        await wallet.sendTransaction(transaction, connection); 
        // Send the transaction using the connected wallet and Solana connection

        alert("Sent " + amount + " SOL to " + to); 
        // Show an alert confirming the transaction
    }

    return (
        <div>
            <input id="to" type="text" placeholder="To" /> 
            {/* Input field to enter recipient's wallet address */}

            <input id="amount" type="text" placeholder="Amount" /> 
            {/* Input field to enter the amount of SOL to send */}

            <button onClick={sendTokens}>Send</button> 
            {/* Button to trigger the sendTokens function */}
        </div>
    );
}
