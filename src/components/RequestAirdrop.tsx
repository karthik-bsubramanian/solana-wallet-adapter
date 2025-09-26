import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function requestAirdrop() {
    const el = document.getElementById("amount") as HTMLInputElement | null;
    if (!el || !wallet.publicKey) return;
    const amount = Number(el.value || 0);
    await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
    alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
  }

  return <div>
    <br /><br />
    <input id="amount" type="text" placeholder="Amount" />
    <button onClick={requestAirdrop}>Request Airdrop</button>
  </div>
}
