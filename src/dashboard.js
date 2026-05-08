const contractAddress = "0x..."; // Your BalanceChecker address
const abi = ["function getBalances(address, address[]) view returns (uint256[])"];

async function updateDashboard() {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const user = accounts[0];

        document.getElementById('wallet-display').innerText = user.slice(0, 6) + '...' + user.slice(-4);
        
        // Fetch ETH Balance
        const balance = await provider.getBalance(user);
        const ethBalance = ethers.utils.formatEther(balance);
        document.getElementById('eth-total').innerText = parseFloat(ethBalance).toFixed(4) + ' ETH';
        
        updateSystemLog("Portfolio scan complete.");
    }
}

function updateSystemLog(msg) {
    const log = document.getElementById('log');
    log.innerHTML = `> ${msg}<br>` + log.innerHTML;
}

document.getElementById('sync-btn').addEventListener('click', updateDashboard);
