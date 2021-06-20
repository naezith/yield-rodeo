import Web3 from 'web3'

const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)

    await window.ethereum.enable()
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    window.alert('Non-Ethereum browser detected. Try installing MetaMask extension.')
    return false
  }

  return true
}

const connectWallet = async () => {
  const web3 = window.web3
  const accounts = await web3.eth.getAccounts()
  if (accounts.length > 0) return accounts[0]
  return ''
}

export { loadWeb3, connectWallet }