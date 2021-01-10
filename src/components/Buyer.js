import React, { useEffect, useState } from 'react'
import { useStore } from '../context/GlobalState';
import BuyerRequest from './BuyerRequest';
import { BuyProperty } from './BuyProperty';
import About from './pages/About';
import { SaleStatus } from './SaleStatus';
import TransferInfo from './TransferInfo';
// import Buyproperty from './BuyProperty';
// import BuyerRequest from './BuyerRequest'


export const Buyer = ({ PropertyId_TokenId,OwnerAddress }) => {

    const [{ contract, accounts }, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")

    const [Data, setData] = useState([])
    const getOffers = async () => await contract.methods.BuyerList(accounts[0]).call().then(function (result, error) {
        if (result) {
            setData({ Data: result })
        } else if (error) {
            console.log(error)
            setTransactionInProcess(false);
            setTransactionSuccessful(false)
            setTransactionError(error.message)
        }
    })

    useEffect(() => {
        getOffers();
    }, [])

    let states = []
    const getResponse = () => {
        Object.values(Data).map((item, index) => {

          //  console.log(typeof (item), item)
            for (var a in item) {
                states = item
                return item[a]
            }
        })
    }
console.log(Data)
    const r = getResponse()
    const responseStatus = states[3]
    const responsetoken = states.ApplyForToken
    const val = states[2]
    const BuyerAddress =states[1]
   // console.log(response,val)
  // console.log(typeof(PropertyId_TokenId),PropertyId_TokenId)
   var Id = parseInt(PropertyId_TokenId-1);
   var b = parseInt(responsetoken-1);
  // console.log(typeof(b))
  //responseStatus == "1" && responsetoken == PropertyId_TokenId
    return (
        <>
            {
               accounts[0] != BuyerAddress && responsetoken != PropertyId_TokenId && accounts[0] == BuyerAddress ?  <BuyerRequest PropertyId_TokenId={PropertyId_TokenId} /> : <SaleStatus accounts={accounts[0]} responsetoken={b} val={val} responseStatus={responseStatus} Id={Id} OwnerAddress={OwnerAddress} PropertyId_TokenId={PropertyId_TokenId} BuyerAddress={BuyerAddress} />
            }
            {/* <BuyProperty PropertyId_TokenId={PropertyId_TokenId} val={val} OwnerAddress={OwnerAddress} BuyerAddress />  */}
        </>
    )
}
