import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import { useStore } from '../context/GlobalState'
import { buyer_Request, transfer_Info } from '../store/asyncActions';
import TransferInfo from './TransferInfo';
import Loader from '../images/loader.gif'

function BuyerRequest({ PropertyId_TokenId, OwnerAddress }) {

    const [{ contract, accounts }, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")

    const [value, setvalue] = useState(0)

    const onSubmit = async (e) => {
        e.preventDefault();
        setTransactionSuccessful(true)
        setTransactionError("")
        try {
            setTransactionInProcess(true)
            const newOffer = {
                PropertyId_TokenId,
                value
            }
            const result = await buyer_Request(contract, accounts, newOffer, dispatch);
            console.log(result)
            setTransactionInProcess(false)
            setTransactionSuccessful(true)

        } catch (error) {
            console.log(error)
            setTransactionInProcess(false);
            setTransactionSuccessful(false)
            setTransactionError(error.message)
        }

    }

    return <div> 
        <h3>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
        {!isTransactionSuccessful && <div style={{ color: "red" }}>{transactionError}</div>}
        
        <form onSubmit={onSubmit} >
            <div className="center">
                {
                    false == true ? <TransferInfo PropertyId_TokenId={PropertyId_TokenId} /> : <div className="center">
                        <h3>Want to Bid?</h3>
                        <input type="text" required onChange={(e) => setvalue(e.target.value)} />
                        <button className="btn" style={{ background: "blue", color: "white" }}> Buy Request</button></div>
                }
            </div>
        </form>
    </div>
}

export default BuyerRequest;