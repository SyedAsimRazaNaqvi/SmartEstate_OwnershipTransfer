import React,{useEffect} from "react";
import "./App.css"
import Web3 from 'web3'
function App() {

  useEffect(() => {
    loadWeb3()
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
      window.alert('Non Ethereum browser detected. You should consider trying Metamask!')
    }
  }

  return (
    <div className="center" >
      <h1 >Hello World</h1>
    </div>
  )
}

export default App;