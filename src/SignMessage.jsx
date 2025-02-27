import { ed25519 } from '@noble/curves/ed25519'; 
// Import ed25519 cryptographic functions for signature verification

import { useWallet } from '@solana/wallet-adapter-react'; 
// Import the useWallet hook to interact with the connected Solana wallet

import bs58 from 'bs58'; 
// Import bs58 encoding library (used for encoding signatures)

import React from 'react'; 
// Import React (required for JSX syntax)

export function SignMessage() {
    const { publicKey, signMessage } = useWallet(); 
    // Get publicKey and signMessage function from the connected wallet

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!'); 
        // Check if the wallet is connected, if not, throw an error

        if (!signMessage) throw new Error('Wallet does not support message signing!'); 
        // Check if the wallet supports signing messages, if not, throw an error

        const message = document.getElementById("message").value; 
        // Get the message input value

        const encodedMessage = new TextEncoder().encode(message); 
        // Convert the message string into a Uint8Array (binary format)

        const signature = await signMessage(encodedMessage); 
        // Request the wallet to sign the encoded message and return the signature

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!'); 
        // Verify the signature using ed25519. If invalid, throw an error

        alert('success', `Message signature: ${bs58.encode(signature)}`); 
        // Show an alert with the base58-encoded signature

        console.log(`Message signature: ${bs58.encode(signature)}`); 
        // Log the signature in the console
    };

    return (
        <div>
            <input id="message" type="text" placeholder="Message" /> 
            {/* Input field for the user to enter a message to sign */}

            <button onClick={onClick}>
                Sign Message
            </button> 
            {/* Button that triggers the signing process */}
        </div>
    );
};
