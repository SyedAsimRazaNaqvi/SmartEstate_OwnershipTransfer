import React, { useEffect, useState } from "react";
import SmartEstate from '../abis/SmartEstate.json';
import "./App.css"

import Navbar from './Navbar';

import Web3 from 'web3'
function App() {

  // Initial state
  const initialState = {
    web3: null,
    accounts: [],
    contract: null,
    web3LoadingErrorMessage: "",
    web3Loadded: false
  }

  const [accountBalance, setAccountBalance] = useState(0);
  const [contract, setContract] = useState("")
  //const [account, setAccount] = useState([])

  useEffect(() => {
    loadWeb3()
    loadBlockchain()
  }, [])

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      console.log("Connected window ethereum")
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      console.log("Connected web3 currentProvider")
    }
    else {
      window.alert('Non Ethereum browser detected. You should consider trying Metamask extension! Here is the link of extension https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en')
    }
  }

  async function loadBlockchain() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts()

    if (web3 && accounts[0]) {
      const balance = await web3.eth.getBalance(accounts[0]);
      setAccountBalance(web3.utils.fromWei(balance, "ether"));
      console.log("Account " + accounts[0] + " Balance " + balance)
    }

    const networkId = await web3.eth.net.getId()
    const networkData = SmartEstate.networks[networkId]
    if (networkData) {
      const smartEstateContract = new web3.eth.Contract(SmartEstate.abi, networkData.address);
      setContract({ smartEstateContract });

    }
    else {
      console.log("SmartEstate not deployed on connected network");
    }
  };




  return (
    <div  >
      <Navbar />
    {accountBalance}
    </div>
  )
}


export default App;