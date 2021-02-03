import React, { useState, useEffect } from 'react'
import { useStore } from '../context/GlobalState'
// import { TransferEvent } from '../store/actions';
import { transfer_Info } from '../store/asyncActions'
import Web3 from 'web3'

function TransferInfo({ PropertyId_TokenId }) {
const Id = parseInt(PropertyId_TokenId)
    const [{ contract, accounts }, dispatch] = useStore();
    const [events, setEvents] = useState([{}])

    useEffect(() => {
         function getData() {
                getProperty()
        }
        getData();
    }, [])

    const getProperty = async () => {
        const response = await transfer_Info(contract)
        setEvents(response)
    }
   console.log(typeof(PropertyId_TokenId),PropertyId_TokenId)
   console.log(typeof (events), events)

    let returnValues = []
    const alldata = () => {
        if (events) {
            Object.values(events).map((item, index) => {
                return returnValues[index] = item.returnValues
            })
            return returnValues
        }
        else{
            return getProperty()
         }
    }
    returnValues = alldata()
    // const val = id - 1;
    let dataItem = []
    dataItem = returnValues[Id-1]

    const data = () => {
        if (dataItem) {
            for (var a in dataItem) {
                const valueInEthers= Web3.utils.fromWei(dataItem[3])
                return <div> <h3>SoldOut!</h3>
                    <h4>New Owner: {dataItem[1]}</h4>
                    <h4>Sold Price: {valueInEthers} Ethers</h4>
                    {/* <h4>{dataItem[4]}</h4> */}
                </div>
            }
        }
    }
    return (<div> {data()} </div>)
}

export default TransferInfo