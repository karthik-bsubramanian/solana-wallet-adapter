import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import './App.css'
import { RequestAirdrop } from './components/RequestAirdrop'
import { WalletModalProvider, WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'
import { ShowSolBalance } from './components/DisplayBalance'

function App() {

  return (
    <>
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/8oZZn9oFLUq4yR9LvCMCD"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton />
            <WalletDisconnectButton />
            <div>
              hi there
            </div>
            <RequestAirdrop />
            <ShowSolBalance/>
          </WalletModalProvider>
        </WalletProvider>


      </ConnectionProvider>
    </>
  )
}

export default App



