# 🌑 Aura | Minimalist Asset Tracker

Aura is a high-fidelity Ethereum portfolio tracker designed for the minimalist power user. It provides a clean, distraction-free view of your on-chain assets across multiple tokens using a custom batch-check smart contract.

## ⚙️ How it Works
1. **Batch Fetching:** Uses the `BalanceChecker` contract to query multiple ERC-20 balances in a single JSON-RPC call.
2. **Minimalist UI:** Built with raw CSS and Tailwind to ensure sub-second load times.
3. **Ethers Integration:** Direct wallet-to-blockchain communication—no centralized APIs.

## 🚀 Deployment
1. **Contract:** Deploy `BalanceChecker.sol` to Ethereum, Polygon, or Arbitrum.
2. **Configuration:** Add your token list to `src/dashboard.js`.
3. **Serve:** Open `public/index.html`.

---
<p align="center">See clearly. 🌑</p>
