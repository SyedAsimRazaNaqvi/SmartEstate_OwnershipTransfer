import React, { useState } from 'react'
import { useStore } from '../context/GlobalState';
import Web3 from 'web3'
import Loader from '../images/loader.gif'

export const BuyProperty = ({ PropertyId_TokenId, val, OwnerAddress, BuyerAddress,responseStatus }) => {

    const [{ contract, accounts }, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")
    // console.log(val,Web3.utils.toWei(val,'ether'))
    const buy_Property = async () => {
        const Buy = await contract.methods.BuyProperty(PropertyId_TokenId).send({ from: accounts[0], to: OwnerAddress, value: Web3.utils.toWei(val, 'ether') })
        console.log(Buy, "buy_Property Function Run Successfully")
    }


    return (
        <>
            <h3>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
            {!isTransactionSuccessful && <div style={{ color: "red" }}>{transactionError}</div>}
            <div className="center"> <button className="btn" onClick={() => buy_Property()} style={{ background: "blue", color: "white" }}> Buy Property</button></div>
            {/* {
                responseStatus == "1" && accounts[0] != BuyerAddress ?  <div className="center"> <button className="btn" onClick={() => buy_Property()} style={{ background: "blue", color: "white" }}> Buy Property</button></div> : <h3>My Property</h3> 
            } */}
        </>
    )
}


// export default Buyproperty;