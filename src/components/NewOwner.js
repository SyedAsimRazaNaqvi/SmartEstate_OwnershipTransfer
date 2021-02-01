import React,{useEffect,useState} from 'react'
import { useStore } from '../context/GlobalState';
import OfferStatus from './OfferStatus';

export const NewOwner = ({PropertyId_TokenId}) => {
    const [{ contract, accounts }, dispatch] = useStore();
    const [Data, setData] = useState()
    useEffect(() => {
        const getData =()=>{
            NewOwnerOfProperty()
        }
       getData()
    }, [contract,accounts])
    
    const NewOwnerOfProperty = async() =>{
        const newOwner = await contract.methods.ownerOf(PropertyId_TokenId).call().then(function (result, error) {
            if (result) {
               // console.log(JSON.stringify(result),result)
                setData(result)
            } else if (error) {
                console.log(error)
                // setTransactionInProcess(false);
                // setTransactionSuccessful(false)
                // setTransactionError(error.message)
            }
        })
    }
console.log(Data,PropertyId_TokenId)

   // console.log(PropertyId_TokenId,responseStatus,OwnerAddress,BuyerAddress,typeof(PropertyId_TokenId),typeof(responseStatus),typeof(OwnerAddress),typeof(BuyerAddress))
    return (
        <div>
            {/* <OfferStatus /> */}
            {Data == accounts ? <OfferStatus PropertyId_TokenId={PropertyId_TokenId} /> : <h3>Sold Out</h3> }
            {/* {
                BuyerAddress === Data   ? <h3>My Property: {Data} val :{val}</h3> : <BuyProperty responseStatus={responseStatus} PropertyId_TokenId={PropertyId_TokenId} OwnerAddress={OwnerAddress} BuyerAddress={BuyerAddress} val={val} />
            } */}
        </div>
    )
}
