# Solana Wallet Integration Project

## Overview
This project integrates a Solana wallet into a React web application. It allows users to:
- Connect and disconnect their Solana wallet.
- Request airdrops of SOL on the Devnet.
- Check their Solana balance.
- Transfer SOL to another wallet.
- Sign messages using their wallet for verification.

## Features
- **Wallet Connection**: Uses `@solana/wallet-adapter-react` for wallet integration.
- **Airdrop**: Allows users to request SOL on the Devnet.
- **Balance Display**: Fetches and displays the connected wallet's balance.
- **Token Transfer**: Sends SOL to another wallet address.
- **Message Signing**: Signs a message and verifies its authenticity.

## Technologies Used
- React.js
- Solana Web3.js
- Solana Wallet Adapter
- Noble Ed25519 for cryptographic verification
- BS58 for encoding signatures

## Installation
### Prerequisites
- Node.js (>= 16.x)
- Yarn or npm
- A Solana wallet (e.g., Phantom, Solflare)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-url.git
   cd your-project-folder
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the development server:
   ```sh
   npm start  # or yarn start
   ```

## File Structure
```
├── src
│   ├── components
│   │   ├── Airdrop.jsx        # Airdrop SOL to wallet
│   │   ├── ShowBalance.jsx    # Display wallet balance
│   │   ├── SendTokens.jsx     # Send SOL to another wallet
│   │   ├── SignMessage.jsx    # Sign a message with the wallet
│   ├── App.jsx                # Main React component
│   ├── index.js               # Entry point
├── package.json
├── README.md
```

## Usage
1. **Connect Wallet**: Click the "Connect Wallet" button.
2. **Airdrop SOL**: Enter an amount and click "Sol Airdrop" (Devnet only).
3. **Check Balance**: Your SOL balance updates automatically.
4. **Send Tokens**: Enter a recipient's address and amount, then click "Send".
5. **Sign Message**: Enter a message, sign it, and verify the signature.

## Troubleshooting
- **White Screen on Load**: Ensure `@solana/wallet-adapter-react-ui/styles.css` is imported in `App.jsx`.
- **Airdrop Fails**: Devnet has a limit on airdrop requests. Try smaller amounts.
- **Transaction Errors**: Ensure the wallet has enough SOL for fees.

## License
This project is open-source under the MIT License.










