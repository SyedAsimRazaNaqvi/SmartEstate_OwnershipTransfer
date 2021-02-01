import { TableHead } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useStore } from '../context/GlobalState';
import Loader from '../images/loader.gif'
import OfferAccepting from './OfferActions/OfferAccept';
import OfferRejecting from './OfferActions/OfferReject';
import { EnablePropertySale } from './EnablePropertySale'

function OfferStatus({ PropertyId_TokenId }) {

    const [{ contract, accounts }, dispatch] = useStore();
    const [Data, setData] = useState([])
    const [isTransactionInProcess, setTransactionInProcess] = useState(false)
    const [isTransactionSuccessful, setTransactionSuccessful] = useState(true)
    const [transactionError, setTransactionError] = useState("")
    useEffect(() => {
        getOffers();
    }, [])

    const getOffers = async () => await contract.methods.OfferStatus(PropertyId_TokenId).call({
        from: accounts[0]
    }).then(function (result, error) {
        if (result) {
            setData({ Data: result })
        } else if (error) {
            console.log(error)
            setTransactionInProcess(false);
            setTransactionSuccessful(false)
            setTransactionError(error.message)
        }
    })

    return (<>
        <EnablePropertySale PropertyId_TokenId={PropertyId_TokenId} />
        {Data != null || undefined ? <div>
            <br />
            <table className="bids" style={{ width: 100 }} >
                <h3>{isTransactionInProcess && <img width="40px" src={Loader} alt="Loading...." />}</h3>
                {Object.values(Data).map((item, index) => {
                    return item.map((post, i) => (
                        <>
                            <tbody>
                                <tr key={post[0]} >
                                    <td><h4>{post[1]}</h4></td>
                                    <td><h4>{post[2]} Ethers</h4></td>
                                    <td>{<OfferAccepting PropertyId_TokenId={PropertyId_TokenId} BuyerAddress={post[1]} useStore={useStore} />}</td>
                                    <td>{<OfferRejecting PropertyId_TokenId={PropertyId_TokenId} BuyerAddress={post[1]} useStore={useStore} />}</td>
                                </tr>
                            </tbody>
                        </>
                    ))
                })}
            </table>
        </div> : <h3>No Bids Available for this property</h3>}
     
    </>)
}

export default OfferStatus;
