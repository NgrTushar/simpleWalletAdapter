import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from './Airdrop';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css'
import {ShowSolanaBalance} from './ShowSolanaBalance'
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';
function App() {


  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/hlu0N6luOOEvSXDasGCjrlu7wmpb6CD4"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div style={{width:"100vw", display:"flex",justifyContent:"center"
                  }}>
                  <WalletMultiButton />
                  
                  <WalletDisconnectButton />
                  </div>
                  <div style={{width:"100vw", display:"flex",justifyContent:"center"
                  }}>
                  {/* <Airdrop></Airdrop> */}

                  {/* <ShowSolanaBalance></ShowSolanaBalance> */}
                  {/* <SendTokens></SendTokens> */}
                  <SignMessage />
                  </div>
                   
                  
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
