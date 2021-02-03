import React,{useEffect,useState} from 'react'
import { useStore } from '../context/GlobalState';
import { BuyProperty } from './BuyProperty'

export const SaleStatus = ({Id,PropertyId_TokenId,val,responseStatus,OwnerAddress,BuyerAddress,responsetoken}) => {
    const [{ contract, accounts }, dispatch] = useStore();
    const [Data, setData] = useState()
    useEffect(() => {
        const getData =()=>{
            NewOwnerOfProperty()
        }
       getData()
    }, [])
    
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
console.log(Data)

   // console.log(PropertyId_TokenId,responseStatus,OwnerAddress,BuyerAddress,typeof(PropertyId_TokenId),typeof(responseStatus),typeof(OwnerAddress),typeof(BuyerAddress))
    return (
        <div>
            {
                BuyerAddress === Data   ? <h3>My Property: {Data} val :{val}</h3> : <BuyProperty responseStatus={responseStatus} PropertyId_TokenId={PropertyId_TokenId} OwnerAddress={OwnerAddress} BuyerAddress={BuyerAddress} val={val} />
            }
        </div>
    )
}
